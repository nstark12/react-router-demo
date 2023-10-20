import { Link } from 'react-router-dom'
import posts from '../posts/posts.json'

const Blog = () => {
 return (
    <>
        <h1>Blog</h1>
        {posts.map(post => {
            return (
                <div>
                    <Link to={post.slug}>
                     <h2>{post.title}</h2>
                    </Link>
                </div>
            )
        })}
    </>
 )
}

export default Blog