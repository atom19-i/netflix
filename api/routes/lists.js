const router = require('express').Router();
const List = require("../models/List");
const verify = require("../verifyToken");

//create
router.post("/", verify, async(req,res) => {
    if(req.user.isAdmin){
        const newList = new List(req.body);
        try{
          const savedList = await newList.save();
          res.status(201).json(savedList);
        }catch(err){
           res.status(500).json(err); 
        }
    } else {
         res.status(403).json("You are not allowed to add List!"); 
    }
});

//delete
router.delete("/:id", verify, async(req,res) => {
  if(req.user.isAdmin){
      try{
        await List.findByIdAndDelete(req.params.id);
        res.status(201).json("The list has been deleted!");
      }catch(err){
         res.status(500).json(err); 
      }
  } else {
       res.status(403).json("You are not allowed to delete List!"); 
  }
});

//get list for homepage
router.get("/", verify, async(req,res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];

  //type == series/movie
  try{
     if(typeQuery){
       if(genreQuery){
        list = await List.aggregate([
          { $match: {type:typeQuery, genre: genreQuery}},
          { $sample: { size:10}}
        ]);
       } else {
        list = await List.aggregate([ 
          { $match: {type:typeQuery}},
          { $sample: { size:10}}
        ]);
       }
     } else {
      list = await List.aggregate([
        { $sample: { size:10}}
      ]);
     }
     res.status(200).json(list);
   }catch(err){
    res.status(500).json(err); 
   }
});

module.exports = router;