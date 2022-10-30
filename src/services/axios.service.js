import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/comments";

const config = {
    baseURL: url,
}

let axiosInstance = axios.create(config);

let getComments = () => {
    return axiosInstance.get()
}

let getComment = (id) => {
    return axiosInstance.get(`/${id}`)
}

export { getComments, getComment }