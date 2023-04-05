export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies,
});

export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
});

export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
});

export const createMovieSuccess = (id) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: id,
});

export const createMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE",
});

export const updateMovieStart = () => ({
    type: "UPDATE_MOVIE_START",
});

export const updateMovieSuccess = (movie) => ({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie,
});

export const updateMovieFailure = () => ({
    type: "UPDATE_MOVIE_FAILURE",
});

export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START",
});

export const deleteMovieSuccess = (movie) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: movie,
});

export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE",
});