import HeroSection from './components/Hero'
import MiddleText from './components/MiddleText'
import ServicesSection from './components/services'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'
import Shop from './components/shop'
import Contacts from './components/contacts'
import Footer from './components/footer'

function App() {
  return (
    <KindeProvider
      domain='https://xpower.kinde.com'
      redirectUri={window.location.origin}
      logoutUri={window.location.origin}
      clientId={import.meta.env.VITE_CLIENT_ID}
    >
      <section
        dir='rtl'
        className='flex min-h-dvh flex-col gap-y-24 overflow-hidden bg-dark-blue'
      >
        <HeroSection />
        <MiddleText />
        <ServicesSection />
        <Shop />
        <div>
          <Contacts />
          <Footer />
        </div>
      </section>
    </KindeProvider>
  )
}

export default App
