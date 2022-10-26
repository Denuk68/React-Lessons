const url = "https://jsonplaceholder.typicode.com/users";

const getUsers = () => {
    return fetch(url).then(data => data.json())
}

const getPostsOfUser = (id) => {
    return fetch(url + "/" + id + "/" + "posts").then(data => data.json())
}

export { getUsers, getPostsOfUser }