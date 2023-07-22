function filterArtData(artData, artistName, keyword) {
    if (artistName) {
      const lowerCaseArtistName = artistName.toLowerCase();
      artData = artData.filter((art) =>
        art.artist && art.artist.toLowerCase().includes(lowerCaseArtistName)
      );
    }
    if (keyword) {
      const lowerCaseKeyword = keyword.toLowerCase();
      artData = artData.filter(
        (art) =>
          (art.title && art.title.toLowerCase().includes(lowerCaseKeyword)) ||
          (art.description && art.description.toLowerCase().includes(lowerCaseKeyword))
      );
    }
    return artData;
  }
  
  module.exports = filterArtData;
  
  