const apiKey = "&api_key=dc6zaTOxFJmzC";
const api = "http://api.giphy.com/v1/gifs/search?";
let query = "&q=";

class giphy {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
}
const gif = new giphy();
document.querySelector("#button1").addEventListener("click", () => {
  //Get Input

  query += document.querySelector("#search").value;
  gif.get(api + apiKey + query).then(data => {
    let result =
      data.data[Math.floor(Math.random() * 25)].images.fixed_height.url;
    document.querySelector(
      "#output"
    ).style.background = `no-repeat url(${result})`;
    document.querySelector("#output").style.backgroundSize = "contain";
  });
  document.querySelector("#search").value = "";
  query = "&q=";
});
