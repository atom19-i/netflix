import "./watch.scss"
import { ArrowBackOutlined } from "@material-ui/icons"
import { useLocation, Link } from "react-router-dom"

export default function Watch() {
  const location = useLocation();
  const movie = location.state.movie;

  window.onpopstate = (e) => {
    e.preventDefault();
    // navigate(-1, { replace: true });
    window.history.back();
  }
  
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
            <ArrowBackOutlined/>
             Home
        </div>
      </Link>
      {/* <video 
           className="video" 
           autoPlay 
           progress="true"
           controls 
           src={movie.video} 
      /> */}
      <iframe 
        title={movie.Title}
        src={movie.video}
        allow="autoplay" 
        allowFullScreen
      />
    </div>
  );
}
