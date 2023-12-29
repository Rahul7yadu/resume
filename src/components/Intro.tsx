const Intro = () => {
  return (
    <section className='flex flex-col  justify-center items-start text-center h-screen ' id='intro'>
          <div className='text-foreground text-2xl  ml-6  xl:text-4xl bg-clip-text  bg-backround'>
            Hi, I am{' '}
            <span className='text-secondary-light animate-pulse font-extrabold text-4xl xl:text-6xl'>
             Rahul 
            </span>
           
          </div>
          <div className='text-foreground font-thin  ml-6 text-2xl xl:text-4xl bg-clip-text bg-gradient-to-t from-primary1-light via-primary1-medium to-primary1-dark'>
            A Passionate Full Stack Web developer
          </div>
    </section>
  )
}
export default Intro