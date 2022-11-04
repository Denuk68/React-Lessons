import { MyContext } from "../App";
import { useContext } from "react";

export default function C() {
    const context = useContext(MyContext)
    return (
        <div>
            <h2>{context}</h2>

            {/* Нижче через <MyContext.Consumer> старий метод  прийому контексту */}
            {/* <MyContext.Consumer>
                {
                    (val) => {
                        return <h2>{val}</h2>
                    }
                }
            </MyContext.Consumer> */}
            
         

        </div>
    )
}