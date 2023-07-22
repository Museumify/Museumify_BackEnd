function filterArtDataByPlaceOfOrigin(artData, placeOfOrigin) {
    if (!placeOfOrigin) {
      return artData;
    }
  
    const lowerCasePlaceOfOrigin = placeOfOrigin.toLowerCase();
    return artData.filter(
      (art) =>
        art.placeOfOrigin &&
        art.placeOfOrigin.toLowerCase().includes(lowerCasePlaceOfOrigin)
    );
  }
  
  module.exports = filterArtDataByPlaceOfOrigin;
  