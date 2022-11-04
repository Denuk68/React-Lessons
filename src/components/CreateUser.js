import { Fragment, useState } from "react";
import { postUser } from "../services/fetch.service";

export default function CreateUser() {
    const [name, setName] = useState("name");
    const [email, setEmail] = useState("email");
    const [user, setUser] = useState({})


    const onChangeInputName = (e) => {
        let newName = e.target.value;
        setName(newName);
    }
    const onChangeInputEmail = (e) => {
        let newEmail = e.target.value;
        setEmail(newEmail);
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        let newUser = { name, email };
        setUser(newUser);
        postUser(newUser);
    }

    return (
        <Fragment>
            <h1>Create useers page</h1>
            <form onSubmit={onSubmitForm}>
                <input type={"text"} name={"name"} placeholder={name} onChange={onChangeInputName} /> 
                <input type={"email"} name={"email"} placeholder={email} onChange={onChangeInputEmail} />
                <button>Create new user</button>
            </form>
        </Fragment >
    )
}
