import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const load = async () => {
    const postsDirectory = path.resolve('src/posts');
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            category: data.category,
            author: data.author
        };
    });

    // Sort posts by date
    posts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return {
        posts
    };
};
