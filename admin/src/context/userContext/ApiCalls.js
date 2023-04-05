import { deleteUserFailure, deleteUsersStart, deleteUserStart, deleteUserSuccess, getUserFailure, getUsersFailure, getUsersStart, getUsersSuccess, getUserStart, getUserSuccess } from "./UserActions";
import axios from "axios";

export const getUsers = async(dispatch) => {
    dispatch(getUsersStart());
    try{
        const res = await axios.get("/users", {
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
        await axios.delete("/users/"+ id, {
        headers:{
            token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
        },
        });
        dispatch(deleteUserSuccess(id));
    }catch(err){
        dispatch(deleteUserFailure());
    }
}