import { Button } from '@/components/ui/button'

type Props = {
  title: string
  count: number
}

export default function Section({ title, count }: Props) {
  return (
    <div className="min-w-80 rounded bg-red-500 text-white flex items-center justify-around h-16 my-2 shadow-lg">
      <h1>{title}</h1>
      <p className="text-red-500 bg-white font-bold px-2  rounded-md">
        {count}
      </p>
    </div>
  )
}
