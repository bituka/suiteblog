import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';
const POSTS_FILE = 'posts.json';

// Initialize posts file if not exists
async function initPosts() {
    try {
        await fs.access(POSTS_FILE);
    } catch {
        await fs.writeFile(POSTS_FILE, JSON.stringify([]));
    }
}

export async function savePost(postData) {
    await initPosts();
    const posts = JSON.parse(await fs.readFile(POSTS_FILE));
    const newPost = {
        id: uuidv4(),
        title: postData.title,
        content: postData.content,
        created: new Date().toISOString()
    };
    posts.unshift(newPost);
    await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2));
    return newPost;
}

export async function getPosts() {
    await initPosts();
    const posts = JSON.parse(await fs.readFile(POSTS_FILE));
    return posts;
}

export function postTemplate(post) {
    return `
        <div class="post-card">
            <h3>${post.title}</h3>
            <div class="post-date">${new Date(post.created).toLocaleDateString()}</div>
            <div class="post-content">${post.content}</div>
        </div>
    `;
}
