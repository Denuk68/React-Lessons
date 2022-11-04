const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json())
}

const postUser = ({ name, email }) => {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            name, email
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const getUser = (id) => {
    return fetch("https://jsonplaceholder.typicode.com/users/" + id).then(data => data.json())
}

export { getUsers, postUser, getUser }