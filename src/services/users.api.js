const url = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = () => {
    return fetch(url).then(value => value.json())
}

export { fetchUsers }