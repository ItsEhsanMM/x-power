import { NAVIGATION_BAR_LINKS } from '@/constants'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'

const Header = () => {
  const [slug, setSlug] = useState('')
  console.log(slug)

  const getSlugFromHash = () => {
    const hash = window.location.hash
    if (hash.startsWith('#')) {
      return hash.substring(1)
    }
    return ''
  }

  useEffect(() => {
    setSlug(getSlugFromHash())

    const handleHashChange = () => {
      setSlug(getSlugFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <header className='top-0 z-10 flex h-20 w-full items-center justify-between px-10 shadow backdrop-blur-sm lg:fixed'>
      <section className='flex size-full items-center justify-between gap-x-2 text-center'>
        <article className='flex h-full items-center justify-center'>
          <span className='text-md font-extrabold'>X.POWER</span>
        </article>
        <article className='hidden size-full lg:flex'>
          {NAVIGATION_BAR_LINKS.map(item => (
            <a
              key={item.id}
              className={`${slug === item.id && 'text-primary'} flex size-full items-center justify-center`}
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
