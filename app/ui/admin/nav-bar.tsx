import { Sidenav } from './sidenav'

export default function NavBar() {
  return (
    <nav className="w-full h-14 border-b-2 flex items-center justify-around">
      <Sidenav />

      <div className="flex w-2/4">
        {/* <Image
          src={logoUrl}
          width={32}
          height={32}
          alt={`logo ${name}`}
        ></Image>
        <h1>{name}</h1> */}
      </div>
      <div className="w-1/4">
        {/* <Button variant={'ghost'} className="hidden">
        <ShoppingCartIcon className="h-5 w-5" />
        </Button> */}
      </div>
    </nav>
  )
}
