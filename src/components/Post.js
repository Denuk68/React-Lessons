export default function Post({ post }) {
    return (
        <div>
            {post && (<div><b>Post</b> {post.id}-{post.title}</div>)}
        </div>
    )
}