export const SET_LOGGED_USER = "SET_LOGGED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function setLoggedUser(id) {
  return {
    type: SET_LOGGED_USER,
    id,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
