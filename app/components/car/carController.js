import CarService from "./carService.js";

//private
let _carService = new CarService()

function _drawCars() {
  let cars = _carService.Car
  //get copy of data for cars
  console.log(cars)

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
    event.preventDefault(){
      console.log("you should write this at some point")
    }
  }
}