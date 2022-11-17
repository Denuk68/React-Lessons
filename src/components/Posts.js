import  "./Posts.css"
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { getPosts } from "../services/api.service";
import Post from "./Post";
import PostDetails from "./PostDetails";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(data => setPosts([...data]))
    }, [])
    return (
        <div>
            <h1>Posts page</h1>
            <div className="posts">
                <div>{posts.map(value => <Post key={value.id} post={value} />)}</div>
                <div>
                    <Routes>
                        <Route path={":id"} element={<PostDetails />} />
                    </Routes>
                </div>
            </div>
        </div>

    )
}