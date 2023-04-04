import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router,Route,Routes,Navigate
} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../src/authContext/AuthContext";
const App = () => {
  const {user} = useContext(AuthContext);
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home/> : <Navigate to="/login"/>} />
          <Route exact path="/login" element={ !user ? <Login/> : <Navigate to="/"/>} />
          <Route exact path="/register" element={ !user ? <Register/> : <Navigate to="/"/>} />
          { user && (
           <>
            <Route path="/movies" element={<Home type="movie"/>} />
            <Route path="/series" element={<Home type="series"/>} />
            <Route path="/watch" element={<Watch/>} />
           </>
           )}
        </Routes>
    </Router>
  );
};

export default App;