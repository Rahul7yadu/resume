import Link from "next/link"
import { readdir } from "node:fs/promises"
import path from 'path'
const blogsPath = path.join(process.cwd(), 'src', 'blogs')
export default async function Blogs() {
    const blogs = await readdir(blogsPath)
    return (
        <div className="flex items-center justify-center h-screen">

            <ul className="text-3xl font-bold text-white ">{blogs.map((blog) => (<li key={blog}><Link href={`/blogs/${blog.replace('.md',
                ''
            )}`}>{blog}</Link></li>))}</ul>
        </div>)
}