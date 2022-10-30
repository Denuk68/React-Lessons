import { useState, useEffect } from "react";
import { getComments, getComment } from "../../services/axios.service";
import Comment from "../comment/Comment";
import "./Comments.css";


export default function Posts() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(({ data }) => setComments([...data]))
    }, [])


    const [comment, setComment] = useState(null);
    let getInfoComment = (id) => {
        getComment(id).then(({ data }) => setComment({ ...data }))
    }

    return (
        <div className={"wrap"}>
            <div className={"posts"}>
                {comments.map(comment => <Comment key={comment.id} comment={comment} getInfoComment={getInfoComment} />)}
            </div>
            {comment && (<div className={"moreInfoOfPost"}>{JSON.stringify(comment)}</div>)}
        </div>
    )
}
