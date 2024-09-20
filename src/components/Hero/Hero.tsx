import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'

const Hero = () => {
  return (
    <section id='main' className='mt-36 flex'>
      <div className='absolute size-full bg-white/5 blur-3xl' />
      <article className='flex flex-col justify-evenly lg:max-w-[50%]'>
        <div className='w-full'>
          <p className='bg-gradient-to-l from-white to-[#bdadff] bg-clip-text text-[56px] font-extrabold text-transparent'>
            هر آنچه برای رسیدن به اندام ایده آل نیاز دارید
          </p>
          <p className='bg-gradient-to-l from-white to-[#bdadff] bg-clip-text text-md text-transparent'>
            تخصصی ترین وبسایت بدنسازی درایران با مجوز رسمی
          </p>
        </div>
        <div className='relative flex w-[90%] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-12 py-8 text-2xl'>
          <Badge className='absolute -top-10 left-5 rounded-full p-3'>
            <img
              src='/assets/icons/Award.png'
              alt='Award'
              className='size-full'
            />
          </Badge>
          <p className='leading-[50px]'>
            با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم گرفتیم
            دانش و تجربه خود را در اختیار همه علاقه‌مندان به این رشته ورزشی جذاب
            قرار دهیم.
          </p>
        </div>
        <div className='mt-5 flex w-[90%] items-center justify-evenly rounded-lg text-md font-bold lg:text-[46px]'>
          <div className='flex flex-col items-center'>
            +2000{' '}
            <span className='text-sm font-normal text-[#8f82ca]'>
              کاربر فعال
            </span>
          </div>
          <Separator orientation='vertical' className='max-h-[80%]' />
          <div className='flex flex-col items-center'>
            +250{' '}
            <span className='text-base font-normal text-[#8f82ca]'>
              مکمل بدنسازی
            </span>
          </div>
          <Separator orientation='vertical' className='max-h-[80%]' />

          <div className='flex flex-col items-center'>
            +1000{' '}
            <span className='text-base font-normal text-[#8f82ca]'>
              رژیم غذایی آنلاین
            </span>
          </div>
        </div>
      </article>
      <article className='-ml-24 -mt-36 hidden w-full lg:block'>
        <img
          src='/assets/images/HeroImage.svg'
          alt='Hero image'
          className='size-full'
        />
      </article>
    </section>
  )
}
export default Hero
