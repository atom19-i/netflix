import {Outlet} from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Topbar from "../topbar/Topbar";

const Layout = () => {
  return(
    <>
      <Topbar/>
      <div className="container">
        <Sidebar/> 
        <Outlet />
      </div>
    </>
  )   
}

export default Layout;
