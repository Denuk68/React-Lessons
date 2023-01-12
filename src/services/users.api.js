const url = 'https://jsonplaceholder.typicode.com/users';

const fetchUsersApi = () => {
    return fetch(url).then(value => value.json())
}
const pushUserApi = (user) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(value => value.json())
}

export { fetchUsersApi, pushUserApi }