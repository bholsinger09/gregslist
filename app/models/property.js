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
    return
    `<!--there will be a template here -->`

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