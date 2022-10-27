export default function Post({ post, getMoreInfoPost }) {
    const clickMoreInfo = () => {
        getMoreInfoPost(post.id)
    }
    return (
        <div className={"Post"}>
            <h3>{post.id} - {post.title}</h3>
            <button onClick={clickMoreInfo}>More info</button>
        </div>
    )
}