import { Fragment } from "react";

export default function User({ user: { id, name, email } }) {


    return (
        <Fragment>{id}-{name}-{email}</Fragment>
    )
}