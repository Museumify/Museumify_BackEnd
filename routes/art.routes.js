const express = require("express");
const Router = express.Router();
const client = require("../client");
// const { Client } = require("pg");

//**********************************************
Router.get('/getArt/:id', (req, res, next) => {
  try {
    let id = req.params.id;
    let sql = `SELECT * FROM arts WHERE id=${id};`;
    client.query(sql).then((data) => {
      res.status(200).send(data.rows);
    });
  } catch (error) {
    next(`An error occurred while get the required art: ${error}`);
  }
});





Router.get("/allArts", (req, res, next) => {
  try {
    let sql = `SELECT * FROM arts `;
    client.query(sql).then((data) => {
      res.status(200).json(data.rows);
    });
  } catch (e) {
    next(`Error while getting data from database  ${e} `);
  }
});

/////////////////////////////////////////
// post method (adding a new art piece by the user)
Router.post("/addNewArt", (req, res, next) => {
  try {
    let title = req.body.title;
    let artist = req.body.artist;
    let image = req.body.image;
    let description = req.body.description;
    let place = req.body.place;
    let comment = req.body.comment;

    let sql = `insert into arts(title,artist,image,description,place,comment) values ($1,$2,$3,$4,$5,$6)`;
    client
      .query(sql, [title, artist, image, description, place, comment])
      .then(() => {
        res.status(201).send(`Art ${title} added to database`);
      });
  } catch (e) {
    next(`Error while adding a new art piece ${e} `);
  }

 
/************************************** */
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

  Router.delete("/delete/:id", (req, res, next) => {
    try {
      let id = req.params.id;
      let sql = `DELETE FROM arts WHERE id=${id}`;
      client.query(sql).then(() => {
        res.status(204).end();
      });
    } catch (e) {
      next(`Error while deleting  ${e} `);
    }
  });

  //   {"title":"",
  //   "artist" :"",
  //   "image" :"",
  //   "description":"",
  //   "place":""}
});
module.exports = Router;

// view Card ('/card/:id')
// get/post/delete/ update
