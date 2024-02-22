import { Sheet,SheetTrigger,SheetContent,SheetClose,SheetHeader } from "./ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { useRef, useState } from "react"
import ScrollLink from './ScrollLink'
const Sidebar = () => {
    const [open,setOpen] = useState(false)
    const HamRef = useRef<HTMLDivElement>(null)

    HamRef.current?.addEventListener('click',(e)=>{
        e.currentTarget !== HamRef.current ?setOpen(false):null
    })

  return (
    <div className="sm:hidden ">
     
    <Sheet onOpenChange={()=>setOpen(prev=>!prev)} open={open} modal={false} >
        <SheetTrigger className="z-10">
        <HamburgerMenuIcon width={30} height={30}/>
        </SheetTrigger>
        <SheetContent ref={HamRef} className="max-w-[250px]">

        <SheetHeader onClick={()=>setOpen(false)}>
           
      <ScrollLink targetId="intro" text="intro"/>
      <ScrollLink targetId="projects" text="projects"/>
      <ScrollLink targetId="skills" text="skills"/>
      <ScrollLink targetId="connect" text="connect"/> 
            
        </SheetHeader>
        </SheetContent>
        </Sheet>
    </div>
  )
}
export default Sidebar