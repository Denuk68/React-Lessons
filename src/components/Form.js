// Неконтрольована форма

import { saveUser } from "../services/user.service";

export default function Form() {


    const onSubmitForm = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let user = { name, email }
        console.log(user)
        saveUser(user);
    }

    return (
        <div>
            <h1>Неконтрольована форма</h1>
            <form onSubmit={onSubmitForm}>
                <input type={"text"} name={"name"} />
                <input type={"email"} name={"email"} />
                <input type={"submit"} value={"save"} />
            </form>
        </div>
    )
}