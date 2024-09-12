export default function TempLogo({ name }: { name: string }) {
  const letters = name.substring(0, 2)
  return (
    <div className="relative w-60 h-60 rounded-full bg-green-200 flex items-center justify-center">
      <span className="text-white text-5xl font-bold">{letters}</span>
    </div>
  )
}
