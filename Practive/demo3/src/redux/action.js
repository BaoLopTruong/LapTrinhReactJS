import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_BOOK_SUCCESS = "FETCH_BOOK_SUCCESS";


export const fakeLogin = payload => {
  return async dispatch => {
    const { username, password } = payload;
    if (username === "admin" && password === "letmein") {
      dispatch({
        type: LOGIN_SUCCESS,
        payload
      });
      dispatch(getUser());
      dispatch(getBooks());
    } else {
      alert("login failure!");
    }
  };
};

export const getUser = () => {
  return async dispatch => {
    const response = await axios.get(
      "http://localhost:3001/users"
    );
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data
    });
  };
};

export const getBooks = () => {
    return async dispatch => {
        const response = await axios.get(
          "http://localhost:3001/books"
        );
        dispatch({
          type: FETCH_BOOK_SUCCESS,
          payload: response.data
        });
      };
}