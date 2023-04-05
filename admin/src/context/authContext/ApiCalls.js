import axios from "axios";
import { loginFailure, loginStart, loginSuccess ,logoutInitiate} from "./AuthActions";
import { API_URL } from "../../helper";

export const login = async (user, dispatch) => {
  dispatch(loginStart);
  try{
    const res = await axios.post(`${API_URL}/auth/login`, user);
    res.data.isAdmin && dispatch(loginSuccess(res.data))
  }catch(err){
    dispatch(loginFailure);
  }
};

export const logout = (dispatch) => {
  try{
    localStorage.removeItem("user")
    dispatch(logoutInitiate()) ;
  }catch(err){
    console.log(err)
  }
};