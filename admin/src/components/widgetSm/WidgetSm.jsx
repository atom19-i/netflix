import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../helper";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () =>{
      try{
        const res = await axios.get(`${API_URL}/users?new=true`,{
          headers: {
            token:
              "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setNewUsers(res.data); 
      } catch(err){
        console.log(err);
      }
    };
    getNewUsers();
   } ,[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <Link 
              to={`/user/${user._id}`} 
              state={{user: user}}
              style={{textDecoration:"none"}}>
          <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
               Display
          </button>
          </Link>
         </li>
        ))}
      </ul>
    </div>
  );
}