import "./navbar.scss";
import {useContext, useState} from 'react';
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { Link} from "react-router-dom";
import { AuthContext} from "../../authContext/AuthContext";
import { logout } from "../../authContext/ApiCalls";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    logout(dispatch);
  }

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  window.onpopstate = () => {
    // navigate(-1, { replace: true });
    window.location.reload();
    window.history.back();
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" reloadDocument className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" reloadDocument className="link">
            <span className="navbarTablet">Series</span>
          </Link>
          <Link to="/movies" reloadDocument className="link">
            <span className="navbarTablet">Movies</span>
          </Link>
          
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon"/>
          <span>Kid</span>
          <Notifications className="icon"/>
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
              <span>Settings</span>
              <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar