import axios from "axios";

let config = {
    baseURL: "https://jsonplaceholder.typicode.com/users"
}
let axiosInstance = axios.create(config);

const getUsers = () => {
    return axiosInstance.get();
}

const getUser = (id) => {
    return axiosInstance.get(`/${id}`)
}

// todo heandle request
// https://jsonplaceholder.typicode.com/users/1/posts


const getPostOfUser = (userId) => {
    return axiosInstance.get(`/${userId}/posts`)
} 

export { getUsers, getUser, getPostOfUser }