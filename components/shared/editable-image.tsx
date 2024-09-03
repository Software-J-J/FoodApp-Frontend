import Image from 'next/image'

type Props = {
  link: any
  setLink: any
}

export default function EditableImage({ link, setLink }: Props) {
  const handleFileChange = async (ev: any) => {
    const files = ev.target.files
    setLink(files[0])
    console.log('image changed')
  }

  return (
    <>
      {link && (
        <Image
          className="rounded-lg w-full h-full mb-1"
          src={link}
          width={250}
          height={250}
          alt={'image'}
        />
      )}
      {!link && (
        <div className=" text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          No image
        </div>
      )}
      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
          Change image
        </span>
      </label>
    </>
  )
}
