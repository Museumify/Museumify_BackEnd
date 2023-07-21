const express = require("express");
const Router = express.Router();
const axios = require("axios");
const { API_URL } = require("../config");

// HOME ('/')
Router.get("/", async (req, res, next) => {
  try {
    let artPieces = await axios.get(API_URL);
    let artData = artPieces.data.data.map((art) => (
        {
            id: art.id,
            title: art.title,
            artist:art.artist_title,
            image:`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`,
            description: art.credit_line,
            century:art.date_display,
            placeOfOrigin:art.place_of_origin,
        }));
    res.json(artData);
  } catch (e) {
    next(`Home Route: ${e}`);
  }
});

module.exports = Router;

// FAVORITE ART ('/favlist')
// all credits go to naser for finding the API