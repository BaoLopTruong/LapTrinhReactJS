import { DELETE_USER_SUCCESS, FETCH_USER_SUCCESS, LOGIN_SUCCESS } from "./action";

// khởi tạo giá trị mặc định cho state gốc.

const initialState = {
  users: [],
  userlogined: {}
};

// Khởi tạo reducer
const rootReducer = (state = initialState, action) => {
  // Handle các actions gửi lên
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, userlogined: action.payload };
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
    case DELETE_USER_SUCCESS:
      return {...state, user: action.payload}
    default:
      return state;
  }
};
export default rootReducer;