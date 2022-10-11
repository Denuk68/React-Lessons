import { Fragment } from "react";
import Geo from "./Geo/Geo";

export default function Address(props) {
    let { street, suite, city, zipcode, geo } = props;
    console.log('address component', geo)
    return (
        <Fragment>
            <h3>Street: {street}, Suite: {suite}, City: {city}, ZipCode: {zipcode}</h3>
            <Geo  lng={geo.lng}  lat={geo.lat}  />
        </Fragment>
    )
}