import axios from "axios";

// User Registration Action
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post("/api/users/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });
    localStorage.setItem("user", JSON.stringify(response.data));
    window.location.href = "/login";
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

// User Login Action
export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const request = await axios.post("/api/users/login", user);
    const response = await request.data;
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response });
    localStorage.setItem("currentUser", JSON.stringify(response));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};
