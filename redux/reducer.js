import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from "./constants";


const initialState = {
  token: null,
  isAuthenticated: false,
  user:{email:'user', pass:'user'},
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
      case LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export default Reducer;