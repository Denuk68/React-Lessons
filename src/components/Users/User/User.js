import Address from "./Address/Address";

export default function User(props) {
    let { id, name, username, email, phone, website, address } = props;
    return (
        <div className="user">
            <h1>ID: {id}, Name: {name}, UserName: {username}.</h1>
            <h2>Email: {email}, Phone: {phone}, Website: {website}</h2>
            <Address street={address.street} suite={address.suite} city={address.city} zipcode={address.zipcode} geo={address.geo} />
            <hr />
        </div>
    )
}