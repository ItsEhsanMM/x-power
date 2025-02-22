import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as CardWrapper
} from '../ui/card'
import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  description: string
  image: string
  title: string
  time?: Date
}

function Card({ className, description, image, title }: CardProps) {
  return (
    <CardWrapper
      dir='rtl'
      className={cn(
        `flex h-[425px] max-w-[300px] flex-col items-center justify-between border-none bg-white/10 py-6 backdrop-blur-lg transition-colors hover:bg-primary`,
        className
      )}
    >
      <CardHeader className='flex h-[45%] w-full items-center justify-between text-center text-white'>
        <div className='grid size-full place-items-center'>
          <img src={image} className={'size-16'} alt={title} />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className='line-clamp-3 max-h-[72px] text-center text-[16px] font-normal text-white'>
        <p>{description}</p>
      </CardContent>
      <CardFooter className='w-full'>
        <Button className='flex size-full items-center justify-center gap-x-2 bg-white/10 text-[16px] text-white hover:bg-dark-blue'>
          ادامه مطلب
          <img src='/assets/icons/Arrow-Left.svg' alt='arrow left' />
        </Button>
      </CardFooter>
    </CardWrapper>
  )
}

export { Card }
