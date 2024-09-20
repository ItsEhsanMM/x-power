import Header from './Header'
import Hero from './Hero'

const HeroSection = () => {
  return (
    <section
      dir='rtl'
      className='bg-pattern grid min-h-dvh place-items-center gap-y-20 px-10 lg:px-24'
    >
      <Header />
      <Hero />
    </section>
  )
}
export default HeroSection
