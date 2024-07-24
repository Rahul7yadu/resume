"use client"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import Sidebar from "./Sidebar"
import ScrollLink from "./ScrollLink"
import { useEffect, useState } from "react"


const Header = () => {

  const [width,setWidth] = useState(0)
  console.log(width)
    useEffect(()=>{
     const max = document.body.scrollHeight - 640
     
     window.onscroll = function(){
          const w = (window.scrollY/max)*100 
          
          setWidth(w)
     } 
    })
   const {setTheme,theme} = useTheme()
   
  return (
    <div className="w-full">

    <main className=" text-lg flex justify-between items-center w-full bg-background text-foreground fixed p-4 top-0 opacity-90 z-10"  >
        <div className="flex">
          <Button onClick={()=>setTheme(theme==='dark'?'light':'dark')}>
       {theme==='dark'?<SunIcon  width={20} height={20} />:
        <MoonIcon width={20} height={20} />}
          </Button>
            </div> 
      <nav className=" hidden sm:flex justify-between items-center w-1/2 ml-10">
      <ScrollLink targetId="intro" text="intro"/>
      <ScrollLink targetId="projects" text="projects"/>
      <ScrollLink targetId="skills" text="skills"/>
      <ScrollLink targetId="connect" text="connect"/>
    </nav>
    <Sidebar/>
    </main>
    <div id="progress-bar" style={{width:`${width}%`,backgroundColor:'red',height:5,position:'fixed',zIndex:10 ,top:'60px'}}></div>
    </div>
  )
}
export default Header