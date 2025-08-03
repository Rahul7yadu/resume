import Image from 'next/image'
const Intro = () => {
  return (
    <section className="flex flex-col  justify-center items-center text-center min-h-screen  " id='intro'  >
      <h1 className='sm:text-7xl text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent '>
        <div className='flex  flex-col items-center justify-center gap-4'>
          <Image src={'/react.svg'} alt='react logo' width={80} height={80} /> <span>Hi, I am{' '}Rahul</span>
        </div>
      </h1>
      <h2 className="sm:text-6xl text-4xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">

        Building Web Solutions That Actually Solve Real Problems
      </h2>

    </section>


  )
}
export default Intro