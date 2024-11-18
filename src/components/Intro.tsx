"use client"
import {motion} from 'motion/react'
const Intro = () => {
  return (

    <section className='flex flex-col  justify-center items-center text-center h-96 sm:h-screen' id='intro' >

          <motion.div className='text-foreground text-2xl  ml-6  xl:text-4xl bg-clip-text  bg-backround' initial={{y:-100}} animate={{y:0}} transition={{duration:2}}>
            Hi, I am{' '}
            <span className='text-secondary-light animate-pulse font-extrabold text-4xl xl:text-6xl'>
             Rahul 
            </span>
           
          </motion.div>
          <div className='text-foreground font-thin  ml-6 text-2xl xl:text-4xl bg-clip-text bg-gradient-to-t from-primary1-light via-primary1-medium to-primary1-dark'>
            A Passionate Full Stack Web developer
          </div>
          
    </section>


  )
}
export default Intro