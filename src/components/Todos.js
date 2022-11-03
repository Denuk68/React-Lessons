import { useState, useEffect } from "react";
import { getTodos } from "../services/fetch.service";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos().then(data => setTodos([...data]))
    }, [])
    return (
        <div>
            <h1>Todos page</h1>
            <ul>
                {todos.map(item => <li key={item.id}>{item.id}-{item.title}</li>)}
            </ul>

        </div>
    )
}