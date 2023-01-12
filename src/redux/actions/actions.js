import { FETCH_USERS, PUSH_USERS } from "./actionTypes";


const fetchUsers = (value) => {
    return { type: FETCH_USERS, payload: value }
}


const pushUser = (value) => {
    return { type: PUSH_USERS, payload: value }
}

export { fetchUsers, pushUser }