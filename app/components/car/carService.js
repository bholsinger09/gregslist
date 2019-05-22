import Car from "../../models/car";

//private
let _carApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp/api/cars
})
let _state = {
  cars: []
}

let _subscribers = {
  cars: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}


//public

export default class CarService {
  addSubscriber(propName, Fn) {
    _subscribers[propName].push(fn)
  }

  get Car() {
    return _state.cars.map(c => new Car(c)
  }

  getAllCars() {
    _carApi

  }
}