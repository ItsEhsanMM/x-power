import HeroSection from './components/Hero'
import MiddleText from './components/MiddleText'
import ServicesSection from './components/services'

function App() {
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
