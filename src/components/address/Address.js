import Geo from "../geo/Geo";

export default function Address({ address: { city, street, geo } }) {
    return (
        <div className="address">
            {city} {street}
            <Geo geo={geo} />
        </div>
    )
}