import { SERVICES } from '@/constants'
import { Card } from '../shared/Card'
import Title from '../shared/Title'

const ServicesSection = () => {
  return (
    <section
      id='services'
      className='grid min-h-dvh place-items-center gap-y-20 px-10 lg:px-24'
    >
      <Title
        title='خدمات ما'
        subTitle='ما در ایکس پاور چه خدماتی ارائه میکنیم؟'
      />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {SERVICES.map(item => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image_src}
          />
        ))}
      </div>
    </section>
  )
}
export default ServicesSection
