const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json());
}

export { getUsers }