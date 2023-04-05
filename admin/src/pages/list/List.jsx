import { Link, useLocation } from "react-router-dom";
import "./list.css";
import { useContext, useState } from "react";
import { ListContext } from "../../context/listContext/ListContext";

export default function List() {
  const {dispatch} = useContext(ListContext);
  const location = useLocation();

  //trailer, video,img to be handled
  
  const list = location.state.list;
  //console.log(list)
  const [updatedlist, setUpdatedlist] = useState(list);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedlist({...updatedlist, [e.target.name]: value});
  }
 
  const handleUpdate = (e) => {
    e.preventDefault();
    //console.log(e.target.dataset.onclickparam)
    // console.log(updatedlist)
    // updatelist(e.target.dataset.onclickparam, dispatch);
  }

  return (
    <div className="list">
      <div className="listTitleContainer">
        <h1 className="listTitle">List</h1>
        <Link to="/newList">
          <button className="listAddButton">Create</button>
        </Link>
      </div>
      <div className="listTop">
          <div className="listTopRight">
              <div className="listInfoTop">
                  
              </div>
              <div className="listInfoBottom">
                  <div className="listInfoKey">
                    <span className="listName">{list.title}</span>
                  </div>
                  <div className="listInfoItem">
                      <span className="listInfoKey">id:</span>
                      <span className="listInfoValue">{list._id}</span>
                  </div>
                  <div className="listInfoItem">
                      <span className="listInfoKey">Genre:</span>
                      <span className="listInfoValue">{list.genre}</span>
                  </div>
                  <div className="listInfoItem">
                      <span className="listInfoKey">Type:</span>
                      <span className="listInfoValue">{list.type}</span>
                  </div>
              </div>

          </div>
      </div>
      <div className="listBottom">
          <form className="listForm">
              <div className="listFormLeft">
                  <label>list Name</label>
                  <input type="text" placeholder={list.title} name="title" onChange={handleChange}/>
                  <label>Genre</label>
                  <input type="text" placeholder={list.genre} name="genre" onChange={handleChange}/>
                  <label>Type</label>
                  <input type="text" placeholder={list.type} name="type" onChange={handleChange}/>

              </div>
              <div className="listFormRight">
                  <div className="listUpload">
                      {/* <img src={list.imgTitle} alt="" className="listUploadImg" /> */}
                  </div>
                  <div className="listFormRightUpload">
                    {/* <label htmlFor="file">
                        <Publish className="publishIcon"/>
                        <input type="file" id="file" style={{display:"none"}} />
                    </label> */}
                   
                    <button 
                       className="listButton" onClick={(e) => handleUpdate(e)} data-onclickparam={list._id}>Update</button>
                  </div>
                 
              </div>
          </form>
      </div>
    </div>
  );
}