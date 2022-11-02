import { useEffect, useState } from "react";
import { getPosts } from "../services/axios.service";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(({ data }) => setPosts([...data]))
  }, [])
  return (
    <div>
      {posts.map(post => <div key={post.id}>{post.id}-{post.title}</div>)}
    </div>

  );
}