// Initial state
export const initialState = {
  user: null,
};

// Actions
export const actionType = {
  SET_USER: "SET_USER",
};

// Reducers
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
