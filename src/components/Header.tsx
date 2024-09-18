import { NAVIGATION_BAR_LINKS } from '@/constants'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='flex h-28 w-full items-center justify-between px-10 pt-14 lg:px-24'>
      <section className='flex size-full items-center justify-between gap-x-2 text-center'>
        <article className='flex h-full items-center justify-center'>
          <span className='text-md font-extrabold'>X.POWER</span>
        </article>
        <article className='hidden size-full lg:flex'>
          {NAVIGATION_BAR_LINKS.map(item => (
            <a
              key={item.id}
              className='flex size-full items-center justify-center'
              href={`#${item.id}`}
            >
              {item.name}
            </a>
          ))}
        </article>
      </section>
      <section className='flex size-full items-center justify-end'>
        <Button>ورود و ثبت نام</Button>
      </section>
    </header>
  )
}
export default Header
