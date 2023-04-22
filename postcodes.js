import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PostCodes extends LitElement {

    static get properties() {
      return {
        postcode: { type: String },
        latitude: { type: Number },
        longitude: { type: Number },
      };
    }


    static BASE_URL = "https://api.postcodes.io/postcodes/";
    static _mypostcode = "GU50BD";
  
    constructor() {
      super();
      this.postcode = null;
      this.latitude = null;
      this.longitude = null;

      console.log(PostCodes.BASE_URL);
      console.log(PostCodes._mypostcode);


      fetch(PostCodes.BASE_URL + PostCodes._mypostcode)

        .then(response => response.json())
        .then(data => {
          console.log(data.result);
          this.postcode = data.result.postcode;
          this.latitude = data.result.latitude;
          this.longitude = data.result.longitude;
        })
        .catch(error => {
          console.error(error);
        });
    }
  
    render() {
      return html`
        <h2>UK postcode:</h2>
        <p>Postcode: ${this.postcode}</p>
        <p>Latitude: ${this.latitude}</p>
        <p>Longitude: ${this.longitude}</p>
      `;
    }
  }
    
    customElements.define('post-codes', PostCodes);
    


