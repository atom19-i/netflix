import { API_URL } from "../../helper";
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess} from "./UserActions";
import axios from "axios";

export const getUsers = async(dispatch) => {
    dispatch(getUsersStart());
    try{
        const res = await axios.get(`${API_URL}/users`, {
            headers:{
                token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getUsersSuccess(res.data));
    }catch(err){
        dispatch(getUsersFailure());
    }
}

export const deleteUser = async(id, dispatch) => {
    dispatch(deleteUserStart());
    try{
        await axios.delete(`${API_URL}/users/`+ id, {
        headers:{
            token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
        },
        });
        dispatch(deleteUserSuccess(id));
    }catch(err){
        dispatch(deleteUserFailure());
    }
}