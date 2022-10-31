import { useState } from "react";
import { createNewComment } from "../services/fetch.service";

export default function ControlledForm() {

    const [body, setBody] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState({});

    const onChangeBody = (e) => {
        setBody(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        let newComment = { body, email };
        setComment({ ...newComment });
        createNewComment(newComment)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input type="text" name={"body"} value={body} onChange={onChangeBody} />
            <input type="email" name={"email"} value={email} onChange={onChangeEmail} />
            <button>Save</button>
        </form>
    )
}