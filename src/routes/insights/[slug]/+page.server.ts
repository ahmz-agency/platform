import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export const load = async ({ params }) => {
    const { slug } = params;
    const postsDirectory = path.resolve('src/posts');
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const htmlContent = marked(content);

        return {
            slug,
            title: data.title,
            date: data.date,
            author: data.author,
            category: data.category,
            content: htmlContent
        };
    } catch (error) {
        return {
            status: 404,
            error: new Error('Post not found')
        };
    }
};
