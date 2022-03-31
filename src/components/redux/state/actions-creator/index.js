import { NEW_USER, EDIT_USER, DELETE_USER, EDIT_TIME } from "./types";

export const changePassword = (userData) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_USER,
      payload: userData,
    });
  };
};

export const deleteUser = (userData) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_USER,
      payload: userData,
    });
  };
};

export const editUser = (userData) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_USER,
      payload: userData,
    });
  };
};

export const addUser = (userData) => {
  return (dispatch) => {
    dispatch({
      type: NEW_USER,
      payload: userData,
    });
  };
};

export const editTime = (timeData) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_TIME,
      payload: timeData,
    });
  };
};
