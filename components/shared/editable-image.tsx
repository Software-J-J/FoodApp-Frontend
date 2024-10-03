import Image from 'next/image'

type Props = {
  labelText: string
  link: string | null
  handleFile: (e: React.ChangeEvent<any>) => void
}

export default function EditImage({ labelText, link, handleFile }: Props) {
  return (
    <>
      <label>
        <input type="file" className="hidden" onChange={handleFile} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
          {labelText}
        </span>
      </label>
      {link && (
        <Image
          className="rounded-lg w-full h-full my-1"
          src={link}
          width={250}
          height={250}
          alt={'image'}
        />
      )}
      {!link && (
        <div className=" text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          ?
        </div>
      )}
    </>
  )
}
