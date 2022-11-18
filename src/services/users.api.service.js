let url = "https://jsonplaceholder.typicode.com/users";

const getUsers = () => {
    return fetch(url).then(data => data.json())
}

export { getUsers }