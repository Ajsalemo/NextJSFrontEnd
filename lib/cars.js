import fs from "fs";
import path from "path";
import matter from "gray-matter";

const carDirectory = path.join(process.cwd(), "cars");

export function getAllCarMarkdownIds() {
  const fileNames = fs.readdirSync(carDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getAllCarMarkdown(id) {
  const fullPath = path.join(carDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id
  return {
    id,
    ...matterResult.data
  }
}