// Apply the theme before first paint to avoid a flash of the wrong colours:
// the visitor's saved choice, otherwise their system setting.
;(function () {
  var saved = null
  try { saved = localStorage.getItem('theme') } catch {}
  var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  document.querySelector('meta[name="theme-color"]').setAttribute('content', dark ? '#05060b' : '#f7f9fc')
})()
