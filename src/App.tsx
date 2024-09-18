import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <section
      dir='rtl'
      className='bg-pattern min-h-screen w-full bg-dark-blue px-10 lg:px-24'
    >
      <Header />
      <Hero />
    </section>
  )
}

export default App
