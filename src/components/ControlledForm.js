import { useState } from "react";
import { createNewPost } from "../services/fetch.service";

export default function ControlledForm() {

    // Універсальний спосіб , для контрольованих форм, коли поля форми схожі.
    const [formState, setFormState] = useState({ title: "", body: "" });
    const onFormInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    const save = (e) => {
        e.preventDefault();
        createNewPost(formState)
    }


    return (
        <form onSubmit={save}>
            <input type="text" name={"title"} value={formState.title} onChange={onFormInputChange} />
            <input type="text" name={"body"} value={formState.body} onChange={onFormInputChange} />
            <button>Save</button>
        </form>
    )
}