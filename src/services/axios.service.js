import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/";

let config = {
    baseURL: url,
}

let axiosInstance = axios.create(config);

const getUsers = () => {
    return axiosInstance.get(`/users`)
}
const getPosts = () => {
    return axiosInstance.get(`/posts`)
}
const getComments = () => {
    return axiosInstance.get(`/comments`)
}

export { getUsers, getPosts, getComments }