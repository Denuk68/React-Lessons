const reducer = (state, action) => {
    switch (action.type) {
        case "GET_USERS":
            let users = action.payload;
            return { ...state, users: users }
        case "SAVE_USER":
            let user = action.payload;
            // state.users.push(user);
            // action to service postMethod saveUser(user)
            return{...state}

        default:
            return { ...state }

    }
}

export default reducer;