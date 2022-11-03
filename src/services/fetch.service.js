const getTodos = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos").then(data => data.json())
}
const getAlbums = () => {
    return fetch("https://jsonplaceholder.typicode.com/albums").then(data => data.json())
}
const getComments = () => {
    return fetch("https://jsonplaceholder.typicode.com/comments").then(data => data.json())
}
const getPostById = (id) => {
    return fetch("https://jsonplaceholder.typicode.com/posts/" + id).then(data => data.json())
}

export { getTodos, getAlbums, getComments, getPostById }