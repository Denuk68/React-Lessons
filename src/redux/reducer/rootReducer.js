import { LOAD_USERS, ADD_USER } from '../actions';

let initialState = { users: [] };
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS:
            // action.payload - we will get from useEffect -> service->jsonplaceholder
            return { ...state, users: [...action.payload] }
        case ADD_USER:
            let newUser = action.payload;
            let newUsersArray = [...state.users, newUser];
            return { ...state, users: [...newUsersArray] }
        default:
            return state;
    }
}

export { rootReducer };