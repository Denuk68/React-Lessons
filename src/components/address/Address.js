import Geo from '../geo/Geo';
export default function Address({ address: { street, city, suite, zipcode, geo } }) {
    return (
        <h3>
            <i>
                {street}-{city}
            </i>
            <Geo geo={geo} />
        </h3>
    )
}