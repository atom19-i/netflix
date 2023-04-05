import { Link, useLocation } from "react-router-dom";
import "./movie.css";
import { Publish } from "@material-ui/icons";
import { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/ApiCalls";

export default function Movie() {
  const {dispatch} = useContext(MovieContext);
  const location = useLocation();

  //trailer, video,img to be handled
  
  const movie = location.state.movie;
  const [updatedmovie, setUpdatedMovie] = useState(movie);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedMovie({...updatedmovie, [e.target.name]: value});
  }
 
  const handleUpdate = (e) => {
    e.preventDefault();
    //console.log(e.target.dataset.onclickparam)
    console.log(updatedmovie)
    updateMovie(e.target.dataset.onclickparam, dispatch);
  }

  return (
    <div className="movie">
      <div className="movieTitleContainer">
        <h1 className="movieTitle">Movie</h1>
        <Link to="/newmovie">
          <button className="movieAddButton">Create</button>
        </Link>
      </div>
      <div className="movieTop">
          <div className="movieTopRight">
              <div className="movieInfoTop">
                  <img src={movie.imgTitle} alt="" className="movieInfoImg" />
              </div>
              <div className="movieInfoBottom">
                  <div className="movieInfoKey">
                    <span className="movieName">{movie.title}</span>
                  </div>
                  <div className="movieInfoItem">
                      <span className="movieInfoKey">id:</span>
                      <span className="movieInfoValue">{movie._id}</span>
                  </div>
                  <div className="movieInfoItem">
                      <span className="movieInfoKey">Genre:</span>
                      <span className="movieInfoValue">{movie.genre}</span>
                  </div>
                  <div className="movieInfoItem">
                      <span className="movieInfoKey">Year:</span>
                      <span className="movieInfoValue">{movie.year}</span>
                  </div>
                  <div className="movieInfoItem">
                      <span className="movieInfoKey">Age Limit:</span>
                      <span className="movieInfoValue">{movie.limit}</span>
                  </div>
                  <div className="movieInfoItemDesc">
                      <span className="movieInfoKey">Description:</span>
                      <span className="movieInfoValue">{movie.desc}</span>
                  </div>
              </div>

          </div>
      </div>
      <div className="movieBottom">
          <form className="movieForm">
              <div className="movieFormLeft">
                  <label>Movie Name</label>
                  <input type="text" placeholder={movie.title} name="title" onChange={handleChange}/>
                  <label>Year</label>
                  <input type="text" placeholder={movie.year} name="year" onChange={handleChange}/>
                  <label>Genre</label>
                  <input type="text" placeholder={movie.genre} name="genre" onChange={handleChange}/>
                  <label>Age Limit</label>
                  <input type="text" placeholder={movie.limit} name="limit" onChange={handleChange}/>
                  <label>Description</label>
                  <input type="text" placeholder={movie.desc} name="desc" onChange={handleChange}/>
                  <label>Trailer</label>
                  <input type="file" placeholder={movie.trailer} name="trailer" />
                  <label>Video</label>
                  <input type="file" placeholder={movie.video} name="video" />
                  
              </div>
              <div className="movieFormRight">
                  <div className="movieUpload">
                      <img src={movie.imgTitle} alt="" className="movieUploadImg" />
                  </div>
                  <div className="movieFormRightUpload">
                    <label htmlFor="file">
                        <Publish className="publishIcon"/>
                        <input type="file" id="file" style={{display:"none"}} />
                    </label>
                   
                    <button 
                       className="movieButton" onClick={(e) => handleUpdate(e)} data-onclickparam={movie._id}>Update</button>
                  </div>
                 
              </div>
          </form>
      </div>
    </div>
  );
}