import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index , item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});


  useEffect(() => {
    const getMovie = async ()=>{
      try {
        const res = await axios.get("/movies/find/"+item,{
          headers: {
            token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  // console.log(item)
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
  <Link to="/watch" state={{movie: movie}}>
    <div
      className="listItem"
      key={movie._id}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie?.imgSm }
        alt=""
      />
      {isHovered && (
        <>
          {/* <video src={movie.trailer} autoPlay={true} loop /> */}
          <iframe width="240px" height="130px" title={movie.title} src={movie.trailer} allowFullScreen allow="autoplay" loop/>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {truncateString(movie.desc,100)}
              {/* {movie.desc} */}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )} 
    </div>
  </Link>
  );
}