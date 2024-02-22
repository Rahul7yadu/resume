import Image from "next/image"
const skillArray = [
    {
      title: 'JavaScript',
      expertise: '7.5',
      icon: '/javascript.svg',
    },
    {
      title: 'ReactJs',
      expertise: '7.5',
      icon: '/react.svg',
    },
    {
      title: 'NextJs',
      expertise: '7.5',
      icon: '/nextjs.svg',
    },
    {
      title: 'React Query',
      expertise: '7.5',
      icon: '/react-query.svg',
    },
    {
      title: 'Redux',
      expertise: '7.5',
      icon: '/redux.svg',
    },
    {
      title: 'React Router',
      expertise: '7.5',
      icon: '/react-router.svg',
    },
    {
      title:'React Native',
      expertise:'5',
      icon:'/react-native-icon.png'
    },
    {
      title: 'MaterialUI',
      expertise: '7.5',
      icon: '/material-ui.svg',
    },
    {
      title: 'TailwindCSS',
      expertise: '7.5',
      icon: '/tailwindcss.svg',
    },
    {
      title: 'CSS-3',
      expertise: '7.5',
      icon: '/css-3.svg',
    },
    {
      title: 'HTML-5',
      expertise: '7.5',
      icon: '/html-5.svg',
    },
    {
      title: 'NodeJs',
      expertise: '7.5',
      icon: '/nodejs.svg',
    },
    {
      title: 'Express',
      expertise: '7.5',
      icon: '/express.svg',
    },
    {
      title: 'MongoDB',
      expertise: '7.5',
      icon: '/mongodb.svg',
    },
    {
      title: 'Git',
      expertise: '7.5',
      icon: '/git.svg',
    },
    {
      title:'Typescript',
      expertise:'7',
      icon:'/typescript-2048.png'
    },
    {
      title:'Sql',
      expertise:'7',
      icon:'/sql.jpg'
    },
    // {
    //   title: 'Jest',
    //   expertise: '7.5',
    //   icon: '/jest.svg',
    // },
    {
      title: 'Postman',
      expertise: '7.5',
      icon: '/postman.svg',
    },
    // {
    //   title: 'Jira',
    //   expertise: '7.5',
    //   icon: '/jira.svg',
    // },
    // {
    //   title: 'UiPath',
    //   expertise: '7.5',
    //   icon: '/uipath.svg',
    // },
  ]

const Skills = () => {
  return (
    <section className="w-full mt-10 mb-5 h-screen bg-white text-black"  id='skills'>
      <h2 className="text-2xl text-center mb-8">Things I know</h2>
    <div className="grid w-full items-center sm:grid-cols-5 gap-8 grid-cols-4 place-items-center text-black bg-slate-50">
        {skillArray.map((skill)=>{
        return (
        <div key={skill.icon}>
        {skill.title}
        <Image src = {skill.icon} width={40} height={40} alt="skill icon" />
        </div>)
        })}
    </div>
    </section>
  )
}
export default Skills