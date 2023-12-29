"use client"
import Link from "next/link"
import { Switch } from "./ui/switch"
import { useTheme } from "next-themes"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import Sidebar from "./Sidebar"
import { useEffect } from "react"
import ScrollLink from "./ScrollLink"
const Header = () => {



   const {setTheme,theme} = useTheme()
    const themeType = theme ==='dark'?true:false

  return (
    <main className=" text-lg flex justify-between items-center w-full bg-background text-foreground fixed p-4 top-0 opacity-90" >
        <div className="flex">
        <SunIcon  width={20} height={20}/> 
        <Switch onCheckedChange={(e)=>setTheme(e?'dark':'light')} checked={themeType}  />
        <MoonIcon width={20} height={20}/>
            </div> 
      <nav className=" hidden sm:flex justify-between items-center w-1/2 ml-10">
      <ScrollLink targetId="intro" text="intro"/>
      <ScrollLink targetId="projects" text="projects"/>
      <ScrollLink targetId="skills" text="skills"/>
      <ScrollLink targetId="connect" text="connect"/>
    </nav>
    <Sidebar/>
    </main>
  )
}
export default Header