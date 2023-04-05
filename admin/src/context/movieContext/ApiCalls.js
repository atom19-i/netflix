import { API_URL } from "../../helper";
import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess, updateMovieFailure, updateMovieStart, updateMovieSuccess } from "./MovieActions"
import axios from "axios";

export const getMovies = async(dispatch) => {
    dispatch(getMoviesStart());
    try{
        const res = await axios.get(`${API_URL}/movies`, {
            headers:{
                token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getMoviesSuccess(res.data));
    }catch(err){
        dispatch(getMoviesFailure());
    }
}


//create
export const createMovie = async(movie, dispatch) => {
    dispatch(createMovieStart());
    try{
        const res = await axios.post(`${API_URL}/movies`, movie , {
            headers:{
                token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createMovieSuccess(res.data));
    }catch(err){
        dispatch(createMovieFailure());
    }
}

//update 
export const updateMovie = async(id, dispatch) => {
    dispatch(updateMovieStart());
    try{
        const res = await axios.put(`${API_URL}/movies/${id}`,{}, {
            headers:{
                token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        //console.log(res.data)
        dispatch(updateMovieSuccess(res.data));
    }catch(err){
        dispatch(updateMovieFailure());
    }
}

export const deleteMovie = async(id, dispatch) => {
    dispatch(deleteMovieStart());
    try{
        await axios.delete(`${API_URL}/movies/`+ id, {
        headers:{
            token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
        },
        });
        dispatch(deleteMovieSuccess(id));
    }catch(err){
        dispatch(deleteMovieFailure());
    }
}