import "./app.css"
import {BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";
import Login from "./pages/login/Login";
import { useContext} from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";


function App() {
  const {user} = useContext(AuthContext);
  //console.log(localStorage.getItem(user))
  // const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user || "{}")?.currentUser?.isAdmin ;

  return (
    <Router>
        <Routes>
          <Route path="/login" element={ !user ? <Login/> : (
              <>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/users" element={<UserList/>} />
                    <Route path="/user/:userId" element={<User/>} />
                    <Route path="/newUser" element={<NewUser/>} />
                    <Route path="/movies" element={<MovieList/>} />
                    <Route path="/movie/:movieId" element={<Movie/>} />
                    <Route path="/newMovie" element={<NewMovie/>} />
                    <Route path="/lists" element={<ListList/>} />
                    <Route path="/list/:listId" element={<List/>} />
                    <Route path="/newList" element={<NewList/>} />
                </Route>
              </>
              )
           } />
        </Routes>
    </Router>
  );
}

export default App;
