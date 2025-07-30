import { marked } from "marked";
import { readFile } from "fs/promises";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
export default async function Blog({ params }: { params: { "blog-id": string } }) {
    const blogId = params["blog-id"];
    const filePath = path.join(process.cwd(), "src", "blogs", `${blogId}.md`);
    if (!fs.existsSync(filePath)) {
        console.error("File not found:", filePath);
        return notFound();
    }
    console.log("File path:", filePath);
    let htmlContent = "";
    try {
        const data = await readFile(filePath, "utf-8");
        console.log("File content:", data);
        htmlContent = await marked.parse(data);

    } catch (error) {
        console.error("Error reading file:", error);
        return notFound();
    }

    return (
        <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-bold">Blog Page</h1>
            <article className="prose prose-lg" dangerouslySetInnerHTML={{ __html: htmlContent }}>

            </article>

        </div>
    );
}