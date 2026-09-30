// Apply the theme before first paint to avoid a flash of the wrong colours:
// the visitor's saved choice, otherwise their system setting.
;(function () {
  var saved = null
  try { saved = localStorage.getItem('theme') } catch {}
  var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  document.querySelector('meta[name="theme-color"]').setAttribute('content', dark ? '#05060b' : '#f7f9fc')
})()

// Show the intro only on the first page view of a browser session, and never for visitors
// who prefer reduced motion. Decided here so the built page never flashes the intro screen.
;(function () {
  var play = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  try {
    if (sessionStorage.getItem('tribox-intro')) play = false
    sessionStorage.setItem('tribox-intro', '1')
  } catch {
    // Storage blocked (private mode etc.) — just show the intro.
  }
  if (play) return
  document.documentElement.dataset.intro = 'skip'
  // Without the intro, start the hero animations straight away.
  document.documentElement.style.setProperty('--intro', '0.1s')
})()
