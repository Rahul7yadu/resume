"use client"

import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'
import Dot from '@/components/animata/background/Dot'
import { useTheme } from 'next-themes'
export default function Home() {
  const {theme} = useTheme()
  console.log(theme)
  
  return (
    <Dot style={{backgroundColor:theme==='dark'?'black':'white'}} spacing={20}>

   <main className='flex flex-col gap-20 items-center justify-center'>
    <Header />
    <Intro/>
    <Projects/>
    <Skills/>
    <Footer/>
   </main> 
    </Dot>
  )
}
