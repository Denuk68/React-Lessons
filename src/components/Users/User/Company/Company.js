import { Fragment } from "react";

export default function Company(props) {
    let { name, catchPhrase, bs } = props;
    console.log("Company component=>", props)
    return (
        <Fragment>
            <h3>Company name: {name}, catchPhrase: {catchPhrase}, bs: {bs}</h3>
        </Fragment>
    )
}