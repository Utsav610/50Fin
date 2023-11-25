const initialState = {
  user: null,
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
