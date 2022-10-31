import React from 'react';
import { useState } from 'react';
import { saveUser } from '../services/user.service';


export default function ControlledForm() {
    const [name, setName] = useState("name");
    const [email, setEmail] = useState("email");
    const [user, setUser] = useState({ name: "", email: "", });


    const onSubmitForm = (e) => {
        e.preventDefault();
        let newUser = { name, email };
        setUser({ ...newUser });
        saveUser(newUser);

    }
    const onInputChangeName = (e) => {
        setName(e.target.value)
    }
    const onInputChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type={"text"} name={"username"} value={name} onInput={onInputChangeName} />
                <input type={"email"} name={"eanil"} value={email} onInput={onInputChangeEmail} />
                <input type={"submit"} value={"save"} />
            </form>
            <div>{JSON.stringify(user)}</div>
        </div>
    )
}