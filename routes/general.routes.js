const express = require("express");
const Router = express.Router();
const axios = require("axios");
const { API_URL } = require("../config");

Router.get("/", async (req, res, next) => {
  try {
    var artRes;
    let artist = req.query.artists;
    let place = req.query.culture;
    let limit=100;
    if (artist == null && place == null) {
      artRes = await axios.get(`${API_URL}?limit=${limit}`);
    } else if (artist != null) {
      artRes = await axios.get(`${API_URL}/?artists=${artist}&limit=${limit}
    `);
    } else if (place != null) {
      artRes = await axios.get(`${API_URL}/?culture=${place}&limit=${limit}
    `);
    }
    let artArray = artRes.data.data.map((art) => ({
      id: art.id,
      title: art.title,
      artist: art.creators?.[0]?.description,
      image: art.images?.web?.url,
      description: art?.wall_description,
      place: art?.culture?.[0],
    }));
    res.send(artArray);
  } catch (e) {
    next(`Search Route: ${e}`);
  }
});

Router.get("/favorite", (req, res, next) => {
  res.send("Welcome to Favorite List");
});

Router.get("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;

    let artRes = await axios.get(`${API_URL}/${id}`);

    let art = artRes.data.data;
    let object = {
      id: art.id,
      title: art.title,
      artist: art.creators?.[0]?.description,
      image: art.images?.web?.url,
      description: art?.wall_description,
      place: art?.culture?.[0],
    };
    res.send(object);
  } catch (e) {
    next(`Search by id Route: ${e}`);
  }
});

module.exports = Router;
