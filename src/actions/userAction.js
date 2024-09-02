import axios from "axios";
import { USER_LOGIN_REQUEST,  USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
    USER_LOGOUT, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, REFRESH_TOKEN
} from "../constants/UserConstants";
import { baseUrl } from "../components/baseUrl";

// Helper function to save tokens in localStorage
const saveTokens = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

export const isTokenExpired = (token) => {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const exp = decodedToken.exp * 1000;
    return Date.now() >= exp;
};

export const signup = (fname, lname, email, phoneNumber, password) => async(dispatch) => {

    try {
        dispatch({
            type: USER_SIGNUP_REQUEST
        })

        const config={
            headers: {
                'Content-Type': 'application/json'
            }

        }

        const payload = {
            first_name: fname,
            last_name: lname,
            email: email,
            mobile: phoneNumber,
            password: password
        };

        console.log('Sending payload:', payload);

        const {data} = await axios.post(`${baseUrl}/users/register`, payload, config)

        

        dispatch({
            type:USER_SIGNUP_SUCCESS,
            payload:data
        })

        // localStorage.setItem('userInfo', JSON.stringify(data))
    }

    catch(error) {

        console.error('Signup error:', error.response ? error.response.data : error.message);

        dispatch({
            type:USER_SIGNUP_FAIL,
            payload: error.response && error.response.data.detail 
            ? error.response.data.detail : error.message
        })
    }



}


export const login = (email, password) => async(dispatch) => {

    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config={
            headers: {
                'Content-type': 'application/json'
            }
        }

        const payload = {
            email: email,
            password: password
        };

        console.log('Sending payload:', payload);

        const {data} = await axios.post(`${baseUrl}/token/pair`, payload, config)

        console.log('receiving data:', data);

        saveTokens(data.access, data.refresh);

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload: data.access
        })


        // localStorage.setItem('userInfo', JSON.stringify(data))
    }

    catch(error) {

        console.error('login error:', error.response ? error.response.data : error.message);

        dispatch({
            type:USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail 
            ? error.response.data.detail : error.message
        })
    }



}


export const refreshToken = () => async (dispatch) => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
  
      const { data } = await axios.post("/api/auth/refresh", { refreshToken });
  
      saveTokens(data.access, data.refresh);
  
      dispatch({
        type: REFRESH_TOKEN,
        payload: data.access,
      });
    } catch (error) {
      dispatch(logout());
    }
  };

export const logout=()=>(dispatch)=> {
    // localStorage.removeItem('userInfo')
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch({type:USER_LOGOUT})
}


