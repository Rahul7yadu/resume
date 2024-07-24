
import Link from "next/link"
import { MouseEvent, useEffect, useState } from "react"
import { Button } from "./ui/button"
const ScrollLink = ({ targetId, text }: { targetId: string, text: string }) => {
  const [currentElement, setCurrentElement] = useState('')

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCurrentElement(entry.target.id)
      }
    })
  }
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2, // Adjust as needed
    });
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      observer.observe(section)
    })

    

    


  }, [])


  const onClickHandler = (e: MouseEvent) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }

  }

  return (
    <Link href={targetId} onClick={(e) => onClickHandler(e)}>
      <Button variant={'link'} className={`text-bold text-lg ${currentElement === text ? 'text-2xl text-red-700' : ''}`} >{text}</Button>
    </Link>
  )
}
export default ScrollLink