import { Fragment } from "react";
import Geo from "./Geo/Geo";

export default function Address(props) {
    let { street, suite, city, zipcode, geo } = props;
    return (
        <Fragment>
            <h3>street = {street}, suite={suite}, city={city}, zipcode={zipcode}</h3>
            <Geo lat={geo.lat} lng={geo.lng} />
        </Fragment>
    )
}