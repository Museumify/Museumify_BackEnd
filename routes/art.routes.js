const express = require("express");
const Router = express.Router();
const client = require("../client");

//**********************************************
// post method (adding a new art piece by the user)

Router.post("/addNewArt", (req, res, next) => {
  try {
    let title = req.body.title;
    let artist = req.body.artist;
    let image = req.body.image;
    let description = req.body.description;
    let place = req.body.place;
    // let comment=req.body.comment;

    let sql = `insert into arts(title,artist,image,description,place) values ($1,$2,$3,$4,$5)`;
    client.query(sql, [title, artist, image, description, place]).then(() => {
      res.status(201).send(`Art ${title} added to database`);
    });
  } catch (e) {
    next(`Error while adding a new art piece ${e} `);
  }


//   {"title":"",
//   "artist" :"",
//   "image" :"",
//   "description":"",
//   "place":""}

});


Router.put("/update/:id", (req, res, next) => {
    try {
      let id = req.params.id;
      let comment = req.body.comment;
      let sql = `UPDATE arts SET comment=$1 WHERE id= ${id}`;
      client.query(sql, [comment]).then(() => {
        res.status(200).json("updated");
      });
    } catch (e) {
      next(`Error while updating a comment  ${e} `);
    }
  });

module.exports = Router;

// view Card ('/card/:id')
// get/post/delete/ update
