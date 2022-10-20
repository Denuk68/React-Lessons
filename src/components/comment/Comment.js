export default function Comment({ comment: { name } }) {
    return (
        <div className="comment">
            +{name}
        </div>
    )
}