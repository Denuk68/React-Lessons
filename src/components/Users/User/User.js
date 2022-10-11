import Address from "./Address/Address";
import Company from "./Company/Company";

export default function User(props) {
    let { id, name, username, email, phone, address, company } = props;
    console.log("User component", props)
    return (
        <div className="user">
            <h1>ID: {id}, Name: {name}, UserName: {username}</h1>
            <h2>email: {email}, phone: {phone}</h2>
            <Address street={address.street} suite={address.suite} city={address.city} zipcode={address.zipcode} geo={address.geo} />
            <Company name={company.name} catchPhrase={company.catchPhrase} bs={company.bs} />
            <hr />
        </div>

    )
}