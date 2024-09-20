interface Props {
  title: string
  subTitle?: string
}

const Title = ({ title, subTitle }: Props) => {
  return (
    <article className='flex h-24 w-full flex-col items-center justify-between'>
      <h3
        className={`${subTitle ? 'text-primary' : 'text-white'} text-3xl font-semibold`}
      >
        {title}
      </h3>
      {subTitle && (
        <h4 className='text-4xl font-bold tracking-wide'>{subTitle}</h4>
      )}
    </article>
  )
}
export default Title
