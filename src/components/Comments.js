import { useState, useEffect } from "react";
import { getComments,} from "../services/fetch.service";
import Comment from "./Comment";

export default function Comments() {
    const [comments, setComments] = useState([]);   
    useEffect(() => {
        getComments().then(data => setComments([...data]))
    }, [])

 
    return (
        <div>
            <h1>Comments page</h1>
           {comments.map(item => <Comment key={item.id} item={item} />)}         

        </div>
    )
}