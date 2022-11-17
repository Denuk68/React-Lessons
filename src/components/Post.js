import { Link } from "react-router-dom";

export default function Post({ post }) {
    return (
        <div>
            {post.title} - <Link to={"/posts/" + post.id}>Post details</Link>
        </div>
    )
}