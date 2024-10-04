import { Shop_Items } from '@/constants'
import Title from '../shared/Title'
import Card from './Card'

const Shop = () => {
  return (
    <section
      id='shop'
      className='grid min-h-dvh place-items-center gap-y-20 px-10 lg:px-24'
    >
      <Title title='محصولات' subTitle='جدیدترین محصولات' />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {Shop_Items.map(item => (
          <Card
            id={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
          />
        ))}
      </div>
    </section>
  )
}
export default Shop
