import "./movieList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import {deleteMovie, getMovies} from "../../context/movieContext/ApiCalls";

export default function MovieList() {
  const {movies, dispatch} = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  },[dispatch]);
  
  const handleDelete = (id) => {
    deleteMovie(id,dispatch); 
    //api Call
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 89 },
    {
      field: "movie",
      headerName: "Movie",
      width: 260,
      renderCell: (params) => {
        return (
          <div className="movieListItem">
            <img className="movieListImg" src={params.row.imgSm} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 112 },
    { field: "year", headerName: "Year", width: 102 },
    { field: "limit", headerName: "Limit", width: 107 },
    { field: "isSeries", headerName: "isSeries", width: 123 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link 
              to={`/movie/${params.row._id}`} state={{movie: params.row}}>
              <button className="movieListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="movieListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="movieList">
      <DataGrid
        rows={movies}
        getRowId={(row) => row._id}
        autoResetPage={false}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
