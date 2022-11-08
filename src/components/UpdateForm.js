import { useState } from "react";

export default function UpdateForm({ user }) {
   
    const [formState, setFormState] = useState({ id: '', name: '', email: '' });
    const onFormInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    const onSubmitUpdateForm = (e) => {
        e.preventDefault();
        console.log(formState)
    }
    return (
        <form onSubmit={onSubmitUpdateForm}>
            <input type={"number"} name={"id"} placeholder={"id"}  onInput={onFormInputChange} />
            <input type={"text"} name={"name"} placeholder={"name"} onInput={onFormInputChange}  />
            <input type={"email"} name={"email"} placeholder={"email"} onInput={onFormInputChange} />
            <button>Update</button>
        </form>
    )
}