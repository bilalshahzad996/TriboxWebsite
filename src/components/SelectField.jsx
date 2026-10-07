import { useEffect, useId, useRef, useState } from 'react'
import Icon from './Icon'

// Dropdown styled to match the site (the browser's own <select> list can't be styled on Windows).
// Follows the "select-only combobox" pattern: the button opens a listbox; arrow keys, Home/End,
// Enter/Space, Escape and typing a letter all work, and screen readers announce the options.
// `options`: [{ value, label, mark? }] — `mark` is an optional icon shown before the label.
export default function SelectField({ name, label, value, options, onChange }) {
  const id = useId()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const rootRef = useRef(null)
  const buttonRef = useRef(null)
  const listRef = useRef(null)
  const typed = useRef({ text: '', at: 0 })

  const selectedIndex = options.findIndex((o) => o.value === value)
  const selected = options[selectedIndex]

  const openList = (index = selectedIndex >= 0 ? selectedIndex : 0) => {
    setActive(index)
    setOpen(true)
  }
  const choose = (index) => {
    onChange({ target: { name, value: options[index].value } })
    setOpen(false)
    buttonRef.current.focus()
  }

  // Close on a click or tap outside
  useEffect(() => {
    if (!open) return
    const onDown = (e) => { if (!rootRef.current.contains(e.target)) setOpen(false) }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [open])

  // Keep the highlighted option in view
  useEffect(() => {
    if (open && active >= 0) listRef.current?.children[active]?.scrollIntoView({ block: 'nearest' })
  }, [open, active])

  const onKeyDown = (e) => {
    const last = options.length - 1
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
        e.preventDefault()
        openList()
      }
      return
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => Math.min(last, i + 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => Math.max(0, i - 1)) }
    else if (e.key === 'Home') { e.preventDefault(); setActive(0) }
    else if (e.key === 'End') { e.preventDefault(); setActive(last) }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (active >= 0) choose(active) }
    else if (e.key === 'Escape') { e.preventDefault(); setOpen(false) }
    else if (e.key === 'Tab') setOpen(false)
    else if (e.key.length === 1) {
      // Type-ahead: jump to the first option starting with the letters typed
      const now = Date.now()
      typed.current = { text: (now - typed.current.at < 600 ? typed.current.text : '') + e.key.toLowerCase(), at: now }
      const match = options.findIndex((o) => o.label.toLowerCase().startsWith(typed.current.text))
      if (match >= 0) setActive(match)
    }
  }

  return (
    <div ref={rootRef} className={`field field-select ${open ? 'is-open' : ''}`}>
      <button
        ref={buttonRef}
        type="button"
        id={`${id}-button`}
        className={`select-button ${selected ? 'filled' : ''}`}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-labelledby={`${id}-label ${id}-button`}
        aria-activedescendant={open && active >= 0 ? `${id}-opt-${active}` : undefined}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
      >
        {selected?.mark && <span className="select-mark">{selected.mark}</span>}
        <span className="select-value">{selected?.label ?? ''}</span>
      </button>
      <span id={`${id}-label`}>{label}</span>
      {/* Keeps the value in the form for anything that reads the form's fields */}
      <input type="hidden" name={name} value={value} />

      <ul ref={listRef} id={`${id}-list`} role="listbox" aria-labelledby={`${id}-label`} className="select-list" hidden={!open}>
        {options.map((o, i) => (
          <li
            key={o.value}
            id={`${id}-opt-${i}`}
            role="option"
            aria-selected={o.value === value}
            className={`select-option ${i === active ? 'is-active' : ''}`}
            onPointerEnter={() => setActive(i)}
            onClick={() => choose(i)}
          >
            {o.mark && <span className="select-mark">{o.mark}</span>}
            <span className="select-label">{o.label}</span>
            {o.value === value && <Icon name="check" size={16} />}
          </li>
        ))}
      </ul>
    </div>
  )
}
