import CarService from "./carService.js";

//private
let _carService = new CarService()

function _drawCars() {
  let cars = _carService.Car
  //get copy of data for cars
  let template = ''
  cars.forEach(car => {
    template += car.Template
    //pulling from service and service grabs from model
  })
  document.getElementById('car').innerHTML = template


}

//public

export default class CarController {
  constructor() {
    //register subscribers
    _carService.addSubscriber('cars', _drawCars)

    _carService.getAllCars()

    //get data
  }
  addCar(event) {
    event.preventDefault()
    let form = event.target
    let carData = {
      make: form.make.value,
      model: form.model.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,

    }
    _carService.addCar(carData)
    form.reset()

  }
}