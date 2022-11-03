import { useState } from "react";
import { getPostById } from "../services/fetch.service";
import Post from "./Post";

export default function Comment({ item }) {

    const [post, setPost] = useState(null);

    let onClickShowPost = () => {
        getPostById(item.postId).then(data => setPost({ ...data }))
    }

    return (
        <div>             
            {item.id}-{item.name}
            <br />
            <button onClick={onClickShowPost}>Show Post</button>            
            <Post post={post} />
            <br/>
            <br/>
           
        </div>
    )
}