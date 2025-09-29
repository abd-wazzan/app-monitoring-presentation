(function(){
  const slides = Array.from(document.querySelectorAll('.slide'))
  const dots = Array.from(document.querySelectorAll('.nav-dots .dot'))
  const main = document.querySelector('.slides')
  let current = 0
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function clamp(n, min, max){ return Math.max(min, Math.min(max, n)) }
  function goTo(idx, behavior){
    current = clamp(idx, 0, slides.length - 1)
    slides[current].scrollIntoView({ behavior: behavior ?? (prefersReduced ? 'auto' : 'smooth'), block: 'start' })
    setActiveDot(current)
  }
  function setActiveDot(idx){
    dots.forEach((d,i)=> d.classList.toggle('is-active', i === idx))
  }

  // Click dots
  dots.forEach((dot, i)=>{
    dot.addEventListener('click', ()=> goTo(i))
    const target = dot.dataset.target
    if (target) dot.setAttribute('aria-controls', target.replace('#',''))
  })

  // Keyboard navigation
  function onKey(e){
    const k = e.key
    if (k === 'ArrowDown' || k === 'PageDown' || k === 'ArrowRight') { e.preventDefault(); goTo(current + 1) }
    if (k === 'ArrowUp' || k === 'PageUp' || k === 'ArrowLeft') { e.preventDefault(); goTo(current - 1) }
    if (k === 'Home') { e.preventDefault(); goTo(0) }
    if (k === 'End') { e.preventDefault(); goTo(slides.length - 1) }
  }
  document.addEventListener('keydown', onKey)

  // Observe scroll to sync dots
  const obs = new IntersectionObserver((entries)=>{
    const visible = entries.filter(e=> e.isIntersecting).sort((a,b)=> b.intersectionRatio - a.intersectionRatio)[0]
    if (!visible) return
    const idx = slides.indexOf(visible.target)
    if (idx !== -1) { current = idx; setActiveDot(idx) }
  }, { root: main, threshold: [0.5, 0.75] })
  slides.forEach(s=> obs.observe(s))

  // Ensure focus for keyboard control
  window.addEventListener('load', ()=> { (main || document.body).focus(); setActiveDot(0) })

  // Hash navigation
  if (location.hash) {
    const idx = slides.findIndex(s=> '#' + s.id === location.hash)
    if (idx >= 0) { setTimeout(()=> goTo(idx, 'auto'), 0) }
  }
})();

