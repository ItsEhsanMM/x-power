import { useEffect } from 'react'
import HeroSection from './components/Hero'
import MiddleText from './components/MiddleText'
import ServicesSection from './components/services'

function App() {
  const updateURLHash = (id: string) => {
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${id}`)
    } else {
      window.location.hash = `#${id}`
    }
  }

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    }

    const sections = document.querySelectorAll<HTMLElement>('section')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          if (id) updateURLHash(id)
        }
      })
    }, observerOptions)

    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  return (
    <section
      dir='rtl'
      className='flex min-h-dvh flex-col gap-y-24 overflow-hidden bg-dark-blue'
    >
      <HeroSection />
      <MiddleText />
      <ServicesSection />
    </section>
  )
}

export default App
