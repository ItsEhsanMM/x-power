const Footer = () => {
  return (
    <section className='flex flex-col gap-y-6 bg-primary px-24 py-12'>
      <article className='flex flex-col justify-between md:flex-row'>
        <div>
          <ul className='flex h-full flex-col justify-between'>
            <h4 className='font-bold'>راهنمای مشتریان</h4>
            <p className='text-sm'>پاسخ به پرسش های متداول</p>
            <p className='text-sm'>روش های ارسال کالا</p>
            <p className='text-sm'>روش های پرداخت</p>
            <p className='text-sm'>قوانین و مقررات</p>
          </ul>
        </div>
        <div className='flex h-40 gap-x-6'>
          <img
            className='size-full'
            src='/assets/images/trust/zpal.png'
            alt='zarin pal'
          />
          <img
            className='size-full rounded-xl bg-white p-2'
            src='/assets/images/trust/enemad.png'
            alt='enemad'
          />
        </div>
      </article>
      <article className='mx-auto grid w-full place-items-center rounded-md bg-black/20 py-4'>
        <span className='text-xl'>
          کلیه حقوق متعلق به{' '}
          <a
            className='underline transition-colors hover:text-blue-300'
            href='https://next-flash.ir'
          >
            این وبسایت
          </a>{' '}
          می باشد.
        </span>
      </article>
    </section>
  )
}
export default Footer
