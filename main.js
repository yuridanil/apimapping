import { Dataset } from "./datasets.js";
import * as Schemas from "./dataschemas.js";
import * as Keys from "./api_keys.js";

let myDataset;
let flickrSearchURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&sort=interestingness-desc&per_page=5&page=1&extras=o_dims,url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o,description,geo,date_upload,date_taken,owner_name&per_page=25";
let pixabaySearchURL = "https://pixabay.com/api/?image_type=photo&per_page=25";
let pexelsSearchURL = "https://api.pexels.com/v1/search?per_page=25";

window.onload = () => {

  document.querySelector("#searchImages").onclick = () => {
    let queryString = document.querySelector("#searchText").value;
    let sourceType = document.querySelector("#sourceType").value;
    let searchUrl, options, schema;

    switch ( sourceType ) {
      case 'flickr':
        searchUrl = `${flickrSearchURL}&api_key=${Keys.FLICKR_API_KEY}&text=${queryString}`;
        schema = Schemas.FLICKR_SCHEMA;
        options = {mode: "cors"};
        break;
      case 'pixabay':
        searchUrl = `${pixabaySearchURL}&key=${Keys.PIXABAY_API_KEY}&q=${queryString}`;
        schema = Schemas.PIXABAY_SCHEMA;
        options = {mode: "cors"};
        break;
      case 'pexels':
        searchUrl = `${pexelsSearchURL}&query=${queryString}`;
        schema = Schemas.PEXELS_SCHEMA;
        options = {headers: {Authorization: `${Keys.PEXELS_API_KEY}` }, mode: "cors"};
        break;
    }

    fetch(searchUrl, options)
    .then( response => response.json())
    .then( json => {
      console.log(json);
      myDataset = new Dataset(json, schema);
      myDataset.draw(document.querySelector("main"));
    });
  }
  
}
