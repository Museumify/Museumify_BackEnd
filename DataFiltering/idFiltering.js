function filterArtDataById(artData, id) {
    if (!id) {
      return artData;
    }
  
    return artData.filter((art) => art.id === id);
  }
  
  module.exports = filterArtDataById;