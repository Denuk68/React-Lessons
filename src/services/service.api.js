const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json())
}

const saveUser = ({ name }) => {
    return fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
        })
    }).then(value => value.json())
}

export { getUsers, saveUser };
