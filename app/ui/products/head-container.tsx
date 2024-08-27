import { manrope } from '../fonts'

export default function Header({ title }: { title: string }) {
  return (
    <div className=" m-6 mb-0">
      <h1 className={`${manrope.className} text-[1.25rem] font-bold`}>
        {title}
      </h1>
      <div></div>
    </div>
  )
}
