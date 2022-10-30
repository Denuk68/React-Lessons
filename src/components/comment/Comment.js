export default function Comment({ comment, getInfoComment }) {
    let onClickCommentInfo = () => {
        getInfoComment(comment.id);
    }
    return (
        <div>
            {comment.id}-{comment.name}
            <button onClick={onClickCommentInfo}>More info</button>
        </div>
    )
}