import { MyContext } from "../App";

export default function C() {
    return (
        <div>
            <MyContext.Consumer>
                {
                    (val) => {
                        return <h2>{val}</h2>
                    }
                }
            </MyContext.Consumer>

        </div>
    )
}