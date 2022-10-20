import axios from "axios";

let config = {
    baseURL: "https://jsonplaceholder.typicode.com"}

let axiosInstance = axios.create(config);


const getUsers = () => {
    return axiosInstance.get(`/users`)
}
const getPosts = (userId) => {
    return axiosInstance.get(`/users/${userId}/posts`)
}
const getComments = (postId)=>{
    return axiosInstance.get(`/posts/${postId}/comments`)
}

export { getUsers, getPosts, getComments };


