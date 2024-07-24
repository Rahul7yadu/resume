import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'
export default function Home() {
  return (
   <main className='flex flex-col gap-4 items-center justify-center'>
    <Header />
    <Intro/>
    <Projects/>
    <Skills/>
    <Footer/>
   </main> 
  )
}
