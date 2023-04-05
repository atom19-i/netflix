import { useContext, useState } from "react";
import { createMovie } from "../../context/movieContext/ApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import storage from "../../firebase";
import {storageReference, downloadUrl, uploadBytesResum} from "../../firebase";
import "./newMovie.css";

export default function NewMovie() {
   const [movie, setMovie] = useState(null);
   const [img, setImg] = useState(null);
   const [imgTitle, setImgTitle] = useState(null);
   const [imgSm, setImgSm] = useState(null);
   const [trailer, setTrailer] = useState(null);
   const [video, setVideo] = useState(null);
   const [uploaded, setUploaded] = useState(0);
   const [progress, setProgress] = useState(0);

   const {dispatch} = useContext(MovieContext);

   const handleChange = (e) => {
     const value = e.target.value;
     setMovie({...movie, [e.target.name]: value});
   };

   //to firebase
   const upload = (items) => {
      items.forEach(item => {
       //var uploadTask = storageReference(storage, `/content/${item.fileName}`);
       const fileName = new Date().getTime() + item.label + item.file.name;
       const uploadTask = uploadBytesResum(storageReference(storage, `/content/${fileName}`), item.file);

       uploadTask.on(
        "state_changed",
          (snapshot) => {
            const progress = 
              Math.round(snapshot.bytesTransferred/ snapshot.totalBytes)*100;
              console.log("Upload is "+progress+ "% done");
            setProgress(progress);
          },
          (err) => {
            console.log(err);
          },
          () => {
             downloadUrl(uploadTask.snapshot.ref)
            .then((url) => {
              console.log(url);

              setMovie((prev) => {
                return {...prev, [item.label]:url};
              });

              setUploaded((prev) => prev+1);
            });
           }
         );
        });
   };


   const handleUpload = (e) => {
     e.preventDefault();
     upload([
      {file:img, label:"img"},
      {file:imgSm, label:"imgSm"},
      {file:imgTitle, label:"imgTitle"},
      {file:trailer, label:"trailer"},
      {file:video, label:"video"}
     ])
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
   }
   
   return (
    <div className="newMovie">
      <h1 className="addMovieTitle">New Movie</h1>
      <form className="addMovieForm">
        <div className="addMovieItem">
          <label>Poster</label>
          <input 
            type="file" 
            id="img" 
            name="img" 
            onChange={e => setImg(e.target.files[0])}/>
        </div>
        <div className="addMovieItem">
          <label>Title Image</label>
          <input 
            type="file" 
            id="imgTitle" 
            name="imgTitle"
            onChange={e => setImgTitle(e.target.files[0])}/>
        </div>
        <div className="addMovieItem">
          <label>Thumbnail Image</label>
          <input 
            type="file" 
            id="imgSm" 
            name="imgSm"
            onChange={e => setImgSm(e.target.files[0])}/>
        </div>
        <div className="addMovieItem">
          <label>Title </label>
          <input type="text" placeholder="John Wick" name="title" onChange={handleChange}/>
        </div>
        <div className="addMovieItem">
          <label>Genre</label>
          <input type="text" placeholder="Action" name="genre" onChange={handleChange}/>
        </div>
        <div className="addMovieItem">
          <label>Age Limit</label>
          <input type="text" placeholder="limit" name="limit" onChange={handleChange}/>
        </div>
        <div className="addMovieItem">
          <label>Description</label>
          <textarea placeholder="Description" name="desc" onChange={handleChange}/>
        </div>
        {/* <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
          />
        </div> */}
        <div className="addMovieItem">
          <label>Is Series?</label>
          <select name="active" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addMovieItem">
          <label>Trailer</label>
          <input 
            type="file" 
            name="trailer" 
            onChange={e => setTrailer(e.target.files[0])}/>
        </div>
        <div className="addMovieItem">
          <label>Video</label>
          <input 
            type="file" 
            name="video"
            onChange={e => setVideo(e.target.files[0])}/>
        </div>
        { uploaded === 5 ? (
          <button className="addMovieButton" onClick={handleSubmit}>Create</button>
        ) : (
          <button className="addMovieButton" onClick={handleUpload}>Upload</button>
        )}
        
      </form>
    </div>
  );
}
