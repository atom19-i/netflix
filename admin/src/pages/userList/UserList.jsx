import "./userList.css"
import { DataGrid} from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect} from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { deleteUser, getUsers } from "../../context/userContext/ApiCalls";


export default function UserList() {

  const {users, dispatch} = useContext(UserContext);

  useEffect(() =>{
    getUsers(dispatch);
  },[dispatch]);
  // console.log(users);

  const handleDelete = (id) =>{
    deleteUser(id, dispatch);
  };

 
  
  const columns = [
    { field: '_id', headerName: 'ID', width: 167 },
    {
      field: 'user',
      headerName: 'Username',
      width: 220,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img 
            className="userListImg"
            src={params.row.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
            alt=""
            />
            {params.row.username}
          </div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 260,
      editable: true, 
    },
    {
      field: 'isAdmin',
      headerName: 'isAdmin',
      width: 131,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return(
          <>
          <Link to={"/user/"+ params.row._id} state={{user: params.row}}>
            <button className="userListEdit">Edit</button>
          </Link>
          
          <DeleteOutline 
            className="userListDelete" 
            onClick={() => handleDelete(params.row._id)}
          />
         </>
        )
      }
    }
  ];
  
  return (
    <div className="userList">
       <DataGrid
        rows={users}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}
