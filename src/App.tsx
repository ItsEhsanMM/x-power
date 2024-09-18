import Header from './components/Header'
import Hero from './components/Hero/Hero'
import MiddleText from './components/Hero/MiddleText'

function App() {
  return (
    <section dir='rtl' className='bg-pattern overflow-hidden bg-dark-blue'>
      <Header />
      <Hero />
      <MiddleText />
    </section>
  )
}

export default App
