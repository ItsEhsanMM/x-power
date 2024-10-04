import {
  CardFooter,
  CardHeader,
  CardTitle,
  Card as CardWrapper
} from '../ui/card'

import { Shop_Items } from '@/constants'

type ShopCardProp = (typeof Shop_Items)[number]

const Card = ({ price, title, image }: ShopCardProp) => {
  return (
    <CardWrapper
      dir='rtl'
      className={`group relative flex h-[370px] max-w-[300px] flex-col items-center justify-between border-none bg-white/10 py-6 backdrop-blur-lg transition-colors hover:bg-primary`}
    >
      <CardHeader className='flex h-[90%] w-full items-center justify-between text-center text-white'>
        <div className='-mt-24 max-h-64 max-w-60 rounded-lg border bg-white/10 backdrop-blur-sm group-hover:bg-white'>
          <img src={image} className='size-full' alt={title} />
        </div>
        <CardTitle className='flex size-full items-center justify-center'>
          {title}
        </CardTitle>
      </CardHeader>
      <CardFooter className='text-white'>
        <span className='size-full'>قیمت: {price.toLocaleString()} تومان</span>
      </CardFooter>
    </CardWrapper>
  )
}
export default Card
