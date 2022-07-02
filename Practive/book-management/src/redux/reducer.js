import { FETCH_USER_SUCCESS, LOGIN_SUCCESS, FETCH_BOOK_SUCCESS } from "./action";

const initialState = {
  users: [],
  userlogined: {}
};

const rootReducer = (state = initialState, action) => {
  
  if(action.type === LOGIN_SUCCESS){
    return { ...state, userlogined: action.payload };
  }
  if(action.type === FETCH_USER_SUCCESS){
    return { ...state, users: action.payload };
  }
  if(action.type === FETCH_BOOK_SUCCESS){
    return { ...state, books: action.payload };
  }

  return state;
};

export default rootReducer;