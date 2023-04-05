import { NotificationsNone, Language, Settings, ArrowDropDown } from "@material-ui/icons"
import { Link } from "react-router-dom";
import Logout from "../logout/Logout";
import "./topbar.css"

export default function Topbar() {
  
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">Admin</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="profile">
            <div className="topbarIconContainer">
              <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
              <ArrowDropDown className="dropdownIcon"/>
              <div className="options">
                <Logout/> 
              </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}
