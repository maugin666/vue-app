export default function getShows(showName) {
  fetch(`https://api.tvmaze.com/search/shows?q=${showName}`)
    .then((response) => response.json())
    .then((json) => {
      const improvedJson = json;
      if (improvedJson.length > 12) improvedJson.length = 12;
      this.shows = improvedJson;
    })
    .catch((error) => console.log(error));
}
