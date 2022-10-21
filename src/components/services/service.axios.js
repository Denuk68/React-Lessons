import axios from "axios";

let config = {
    baseURL: "https://jsonplaceholder.typicode.com",
}

let axiosInstance = axios.create(config);

let getUsers = () => {
    return  axiosInstance.get('/users')   
}
let getUser = (userId) => {
   return axiosInstance.get(`/users/${userId}`)
}

export {getUsers, getUser};