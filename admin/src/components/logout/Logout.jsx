import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { logout} from "../../context/authContext/ApiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";



export default function Logout() {
  const { isFetching , dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
    navigate("/login");
  };
   
  return (
    <div className="options">
          <span onClick={handleLogout} disabled={isFetching}>Logout</span>
    </div>
  )
}
