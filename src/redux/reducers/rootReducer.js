const rootReducer = (state = { users: [] }, action) => {
    // console.log('reducer', state)
    console.log(action)
    switch (action.type) {
      case "FETCH_USERS":
        return { ...state, users: [...action.payload] };
      case "CLEAR_STORE":
        return { ...state, users: [] }
      case "PUSH_USERS":
        console.log(action.payload)
        return { ...state, users: [...state.users, action.payload] }
      default: return state;
    }
  }

export {rootReducer};