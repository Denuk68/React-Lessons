let url = "https://jsonplaceholder.typicode.com/posts";

const getPosts = () => {
    return fetch(url).then(data => data.json())
}

export { getPosts }