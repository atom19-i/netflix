import { API_URL } from "../../helper";
import {  createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess, updateListFailure, updateListStart, updateListSuccess} from "./ListActions"
import axios from "axios";

export const getLists = async(dispatch) => {
    dispatch(getListsStart());
    try{
        const res = await axios.get(`${API_URL}/lists`, {
            headers:{
                token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getListsSuccess(res.data));
    }catch(err){
        dispatch(getListsFailure());
    }
}

//create
export const createList = async(list, dispatch) => {
    dispatch(createListStart());
    try{
        const res = await axios.post(`${API_URL}/lists`, list , {
            headers:{
                token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createListSuccess(res.data));
    }catch(err){
        dispatch(createListFailure());
    }
}

//update - todo
export const updateList = async(id,dispatch) => {
    dispatch(updateListStart());
    try{
        const res = await axios.put(`${API_URL}/lists/${id}`,{}, {
            headers:{
                token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        //console.log(res.data)
        dispatch(updateListSuccess(res.data));
    }catch(err){
        dispatch(updateListFailure());
    }
}


//todo- not working in list List
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
      await axios.delete(`${API_URL}/lists/`+id,{
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(deleteListSuccess(id));
    } catch (err) {
      dispatch(deleteListFailure());
    }
  };