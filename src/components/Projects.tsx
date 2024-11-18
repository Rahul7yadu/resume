import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import "./ui/styles/borders.css"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { GithubIcon, GlobeIcon } from 'lucide-react'
type ProjectProps = {
    title:string,image:string,url:string,skills:string[],description:string,githubUrl:string
    }
type ProjectsArray = ProjectProps[]
    const projects:ProjectsArray = [
        {
            title: 'Movies Ai',
            skills: ['Nextjs', 'ReactJs', 'TailwindCSS','Google Gemini API'],
            image: '/movies-ai.png',
            url: "https://movies-ai-chat.vercel.app/",
            description:'surf movies , Tv shows with AI',
            githubUrl:"https://github.com/Rahul7yadu/movies-ai"
        },
        {
            title: 'Devconnect',
           skills: ['JavaScript', 'ReactJs', 'Redux', 'Nodejs', 'Expressjs', 'mongoDB'],
            image: '/devconnect.png',
            url: 'https://devconnector-rahul.cyclic.app/',
            description:'connect with developer around the world and share experience',
            githubUrl:"https://github.com/Rahul7yadu/Devconnect3"
        },
        {
            title: 'E-commerce Website',
            skills: ["stripe",'JavaScript', 'ReactJs', 'Reduxjs/Redux-toolkit','Nodejs','webhooks','MongoDb'],
            image: '/ecommerce.png',
            url: "https://e-commerce-backend-rosy.vercel.app/",
            description:'a full stack e commerce platform for buying products along with payment system',
            githubUrl:"https://github.com/Rahul7yadu/e-commerce-frontend"
        },
        {
            title: 'Moviestan',
            skills: ['Typescript', 'ReactJs', 'Nextjs', 'TailwindCSS', 'TmdbAPI'],
            image: '/moviestan-dark.png',
            url: 'https://moviestan.vercel.app/',
            description:'a movie website to search and surf for movies',
            githubUrl:"https://github.com/Rahul7yadu/movie-app"
        },
       
        {
            title: 'Taskio',
            skills: ['Typescript', 'ReactJs', 'TailwindCSS', 'Firebase'],
            image: '/taskio3.png',
            url: "https://todos-aa10d.web.app/",
            description:'a Task app to keep record of your task',
            githubUrl:"https://github.com/Rahul7yadu/Taskio-firebase"
        },
        {
            title: 'Astronomy - Nasa Photo of the Day',
            skills: ['JavaScript', 'ReactJs', 'Material UI'],
            image: '/nasa-potd.png',
            url: 'https://nasa-potd-nine.vercel.app/',
            description:'get a picture of a day from nasa',
            githubUrl:"https://github.com/Rahul7yadu/nasa-potd"
        },
        {
            title: 'Reactionary(React Dictionary)',
            skills: ['JavaScript', 'ReactJs', 'Material-UI',],
            image: '/react-dictionary.png',
            url: "https://react-dictionary-302df.web.app/",
            description:'a simple web app for searching meaning of words',
            githubUrl:"https://github.com/Rahul7yadu/React-Dictionary"
        },
       
    ]
const Projects = () => {

    return (
        <section className='w-full' id='projects'>
            <h2 className='text-4xl text-center mb-5 '>Some personel projects</h2>
            {/* <hr className='w-full h-4 bg-red-500 mb-4 rounded-sm'/> */}
        <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 w-full place-items-center '>
            {
            projects.map((project) => {
                return (<Project title={project.title}
                image={project.image}
                url={project.url}
                skills={project.skills}
                description={project.description}
                githubUrl={project.githubUrl}
                key={project.url}
                />)
            })
        }
        </div>
        </section>
    )
}
export default Projects



function Project({title,image,url,skills,description,githubUrl}:ProjectProps) {
    return(
        <Link href={url}>
    <Card className="w-[350px] sm:min-w-[450px] h-[450px] border-2 border-stone-500 cursor-pointer  transition-all ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={image} alt="project image" width={350} height={350} ></Image>
        
      </CardContent>
      <CardFooter>
        <div className='flex flex-wrap'>
        {skills.map((skill)=><p className='m-2' key={skill}>{skill}</p>)}
        </div>
        <Link href={url} target='_blank' className='transition-all '><Button variant={'link'} ><GlobeIcon className='hover:text-blue-500'/></Button></Link>
        <Link href={githubUrl} target='_blank' className=' transition-all'> <GithubIcon className='hover:text-red-700'/></Link>
      </CardFooter>
    </Card>
    </Link>
    )
}