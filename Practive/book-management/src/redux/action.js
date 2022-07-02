import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_BOOK_SUCCESS = "FETCH_BOOK_SUCCESS";


export const checkLogin = payload => {
  return async dispatch => {
    const response = await axios.get(
        "http://localhost:3001/users"
      );
    const { username, password } = payload;
    response.data.map( user =>{
        if(username === user.username && password === user.password && user.author === "manager"){
            dispatch({
                type: LOGIN_SUCCESS,
                payload
              });
            dispatch(getBook());
            alert("dang nhap thanh cong")
        }
        if (username === user.username && password === user.password && user.author === "staff") {
            alert("login failure!");
            dispatch({
              type: LOGIN_SUCCESS,
              payload
            });
          }
    })
  };
};

export const fakeLogin = payload => {
    return async dispatch => {
      const { username, password } = payload;
      if (username === "admin" && password === "letmein") {
        dispatch({
          type: LOGIN_SUCCESS,
          payload
        });
        dispatch(getUser());
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


export const getBook = () => {
  return async dispatch => {
    const response = await axios.get(
      "http://localhost:3001/books"
    );
    dispatch({
      type: FETCH_BOOK_SUCCESS,
      payload: response.data
    });
  };
};