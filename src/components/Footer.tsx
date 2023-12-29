import Link from "next/link"
import Image from "next/image"
import { GitHubLogoIcon,LinkedInLogoIcon,TwitterLogoIcon ,FileIcon } from "@radix-ui/react-icons"
const Footer = () => {
  return (
    <section className="w-full  mb-4 p-2" id="connect">
      <h2 className="text-center mb-5">Connect with me</h2>
    <div  className="flex justify-between items-center w-full">
      <Link href='https://github.com/Rahul7yadu'>
        github
        <GitHubLogoIcon width={50} height={50}/>
        
      </Link>
      <Link href='https://www.linkedin.com/in/rahul-yadu-457168203/'>
        linkedin
        <LinkedInLogoIcon width={50} height={50}/>
        
      </Link>
      <Link href='https://twitter.com/Rahul53520475'>
        Twitter
        <TwitterLogoIcon width={50} height={50}/>
       
      </Link>
      <Link href='/Rahul_yadu_resume.pdf' target="_blank" rel="noopener noreferrer">
        Resume
        <FileIcon width={50} height={50}/>
      </Link>
      <Link href='mailto:rahulyadu17@gmail.com'>
        Email
        <Image src='/mail.svg' alt='github' width={50} height={50}/>
      </Link>
      
    </div>
    </section>
  )
}
export default Footer