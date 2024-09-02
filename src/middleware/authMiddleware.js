// middleware/authMiddleware.js
import { REFRESH_TOKEN } from "../constants/UserConstants"; // Import REFRESH_TOKEN
import { refreshToken } from "../actions/userAction";

export const authMiddleware = ({ dispatch, getState }) => (next) => async (action) => {


  try {
    const { accessToken } = getState().userLogin;

    if (!accessToken) {
      throw new Error("No access token found");
    }

    // Proceed with the action logic
    if (accessToken && action.type !== REFRESH_TOKEN && isTokenExpired(accessToken)) {
      await dispatch(refreshToken());
    }
  
    return next(action);
  } catch (error) {
    console.error("Error in action:", error);
    // Handle the error, possibly dispatching an error action
  }
};

// Helper function to check token expiry
const isTokenExpired = (token) => {
  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  const exp = decodedToken.exp * 1000;
  return Date.now() >= exp;
};
