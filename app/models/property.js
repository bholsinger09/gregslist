export default class Properties {
  constructor(data) {
    this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.description = data.description || 'no description given'
  }

  get Template() {
    return `<div class="col-3">
            <div class="card">
                <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.bedrooms} - ${this.levels} - ${this.bathrooms} - ${this.year}</h5>
                    <h5 class="card-title">$${this.price.toFixed(2)}</h5>
                    <p class="card-text">${this.description}</p>
                  
                    <button class="btn btn-danger" onclick="app.controllers.carController.delete('${this._id}')">Delete</button>
                </div>
            </div>
        </div>`

  }
}



// All houses look like:

// var house = {

//   bedrooms: 4,

//   bathrooms: 1,

//   imgUrl: "https://placehold.it/200x200",

//   levels: 2,

//   year: 2015,

//   price: 200000,

//   description: "This one is optional"

// }