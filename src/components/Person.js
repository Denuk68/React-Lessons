import './Person.css';


export default function Person(props){
    let {name, surname, age, info, photo} = props;  
      
    return(
        <div className="person"> 
            <h2>{name}  {surname}</h2>
            <h3>Age: {age}</h3>
            <h3>Info: {info}</h3>
            <img src={photo}></img>
        </div>
    )
}