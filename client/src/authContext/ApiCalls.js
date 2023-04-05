import axios from "axios";
import { API_URL } from "../helper";
import { loginFailure, loginStart, loginSuccess, logoutInitiate} from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart);
  try{
    const res = await axios.post(`${API_URL}/auth/login`, user);
    dispatch(loginSuccess(res.data))
  }catch(err){
    dispatch(loginFailure);
  }
};

export const logout = (dispatch) => {
    dispatch(logoutInitiate());
    localStorage.removeItem("user");
};
