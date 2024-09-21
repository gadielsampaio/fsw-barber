import { CalendarDaysIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
// import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      {/* PROFILE */}
      <div className="flex items-center justify-between gap-2 border-b border-solid py-5">
        <h2 className="font-bold">Olá, Faça seu Login!</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <LogInIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%] rounded-sm">
            <DialogHeader className="mb-2">
              <DialogTitle>Fazer Login</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta Gooogle
              </DialogDescription>
            </DialogHeader>
            <Button
              className="mx-auto my-0 size-fit gap-2 font-bold"
              variant="outline"
            >
              <Image
                src="/Google.svg"
                width={18}
                height={18}
                alt="Fazer login com o Google"
              />
              Google
            </Button>
          </DialogContent>
        </Dialog>
        {/* <Avatar>
          <AvatarImage
            className="object-cover"
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Avatar>

        <div>
          <p className="font-bold">Marcos Gadiel</p>
          <p className="text-xs">gadiel@barber.com</p>
        </div> */}
      </div>
      {/* MENU */}
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <Button className="justify-start gap-2" variant="ghost" asChild>
          <SheetClose asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </SheetClose>
        </Button>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarDaysIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              src={option.imageUrl}
              height={18}
              width={18}
              alt={option.title}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button className="justify-start gap-2" variant="ghost">
          <LogOutIcon size={18} /> Sair
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
