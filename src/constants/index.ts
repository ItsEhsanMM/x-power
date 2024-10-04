export const NAVIGATION_BAR_LINKS = [
  {
    id: 'main',
    name: 'صفحه اصلی'
  },
  {
    id: 'services',
    name: 'خدمات'
  },
  {
    id: 'shop',
    name: 'فروشگاه'
  },
  {
    id: 'blog',
    name: 'بلاگ'
  },
  {
    id: 'about-us',
    name: 'درباره ما'
  }
]

export const SERVICES: {
  id: number
  image_src: string
  title: string
  description: string
}[] = [
  {
    id: 1,
    image_src: '/assets/icons/services/bench-press.svg',
    title: 'برنامه تمرینی',
    description:
      'ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی'
  },
  {
    id: 2,
    image_src: '/assets/icons/services/diet.svg',
    title: 'رژیم غذایی',
    description:
      'ارائه آنلاین رژیمهای غذایی ویژه ورزشکاران و افرادی که دوستدار سلامتی هستند'
  },
  {
    id: 3,
    image_src: '/assets/icons/services/pill.svg',
    title: 'مکمل های بدنسازی',
    description:
      'ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی'
  },
  {
    id: 4,
    image_src: '/assets/icons/services/workout-routine.svg',
    title: 'برنامه تمرینی',
    description:
      'ارائه بهترین برنامه‌های تمرینی همراه با توضیحات کامل ویژه همه سطوح ورزشی'
  }
]

export const Shop_Items: {
  id: number
  title: string
  price: number
  image: string
}[] = [
  {
    id: 0,
    title: 'پروتئین وی ژن استار 2270 گرم',
    price: 2290000,
    image: '/assets/images/shop/whey1.png'
  },
  {
    id: 1,
    image: '/assets/images/shop/whey2.png',
    price: 1800000,
    title: 'پروتئین وی یوروویتال 1000 گرم'
  },
  {
    id: 2,
    image: '/assets/images/shop/gainer.png',
    price: 9600000,
    title: "گینر ژن استار 3000 گرم"
  },
  {
    id: 3,
    image: '/assets/images/shop/whey3.png',
    price: 3180000,
    title: "دلیشس وی پروتئین کیو ان تی 2000 گرم"
  }
]
