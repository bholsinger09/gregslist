export default class Car {
  constructor(data) {
    this.id = data._id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description || 'No Description Provided'
  }
  get Template() {
    //classes have get Template methods 
    return `
      <div class="col-3">
        <div class="card" >
          <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${this.make} - ${this.model}</h5>
            <h5 class="card-title">$${this.price}</h5>
            
            <p class="card-text">${this.description}</p>
            <button class = "btn btn-primary" onclick= "app.controllers.carcontroller.bid('${this.id})">Bid</button>
          </div>
        </div>
      </div>
    
    `

  }
}