import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect, useState } from "react";
import "./featured.scss";
import { API_URL } from "../../helper";
import axios from "axios";

export default function Featured({type, setGenre}) {
  const [content, setContent] = useState({});

  useEffect(() =>{
    const getRandomContent = async ()=>{
      try{
        const res = await axios.get(`${API_URL}/movies/random?type=${type}`, {
          headers: {
            token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          }
        });
        setContent(res.data[0]);
      } catch(err) {
        console.log(err);
      }
    };
    getRandomContent();
  },[type]);

  // const truncateString = (str, num) => {
  //   if (str?.length > num) {
  //     return str.slice(0, num) + '...';
  //   } else {
  //     return str;
  //   }
  // };

  const truncate = (input) =>
  input?.length > 300 ? `${input.substring(0, 250)}...` : input;
  
  return (
    <div className="featured">
        {type && (
           <div className="category">
              <span>{type === "movie" ? "Movies" : "Series"}</span>
              <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                <option>Genre</option>
                <option value="Adventure">Adventure</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Historical">Historical</option>
                <option value="Horror">Horror</option>
                <option value="Romance">Romance</option>
                <option value="Sci-fi">Sci-fi</option>
                <option value="Thriller">Thriller</option>
                <option value="Western">Western</option>
                <option value="Animation">Animation</option>
                <option value="Drama">Drama</option>
                <option value="Documentary">Documentary</option>
              </select>
           </div> 
        )}
        <img
        // src={`https://image.tmdb.org/t/p/original${moviecontent?.backdrop_path}`}
        src={content.imgTitle}
        alt=""
        />
    
      <div className="info ">
        {/* <img src={`https://image.tmdb.org/t/p/w500${moviecontent?.poster_path}`} alt=""/> */}
        
        <span className="title">
          {content.title}
        </span>
        <span className="desc">
          {truncate(content.desc)}
          {/* {content.desc} */}
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
                <span className="play"></span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}
