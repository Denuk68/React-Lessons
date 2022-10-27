const url = "https://jsonplaceholder.typicode.com";


let getPosts = () => {
    return fetch(url + "/posts").then(data => data.json());
}

let getPostInfo = (id) => {
    return fetch(url + "/posts/" + id).then(data => data.json());
}



export { getPosts, getPostInfo };