import "./Posts.css"
import { useEffect, useState } from "react"
import { getPosts, getPostInfo } from "../../services/fetch.service"
import Post from "../post/Post"

export default function Posts() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(data => setPosts([...data]))
    }, [])

    const [post, setPost] = useState(null)
    const getMoreInfoPost = (id) => {
        getPostInfo(id).then(data => setPost({ ...data }))
    }

    return (
        <div className={"wrap"}>
            <div className={"posts"}>
                {posts.map(data => <Post key={data.id} post={data} getMoreInfoPost={getMoreInfoPost} />)}
            </div>
            {post && (<div className={"post-info"}>{JSON.stringify(post)}</div>)}
        </div>
    )
}