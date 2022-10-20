import Comment from "../comment/Comment";

export default function Comments({ comments }) {
    return (
        <div className="comments">
            {comments.map(comment => <Comment comment={comment} />)}
        </div>
    )
}