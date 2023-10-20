import { useLoaderData } from 'react-router-dom'
import posts from '../posts/posts.json'

export async function loader({ params }) {
    const post = posts.find(post => post.slug === params.slug)
    return { post }
}

const BlogPost = () => {
    const { post } = useLoaderData()

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </>
    )
}

export default BlogPost