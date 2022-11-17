const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json())
}
const getPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json())
}
const getPost = (id) => {
    return fetch("https://jsonplaceholder.typicode.com/posts/" + id).then(data => data.json())
}
const getAlbums = () => {
    return fetch("https://jsonplaceholder.typicode.com/albums").then(data => data.json())
}
const getAlbum = (id) => {
    return fetch("https://jsonplaceholder.typicode.com/albums/" + id).then(data => data.json())
}
export { getUsers, getPosts, getPost, getAlbums, getAlbum }