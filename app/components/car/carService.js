import Car from "../../models/car";

//private
let _carApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp/api/cars'
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
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Car() {
    return _state.cars.map(c => new Car(c))
  }

  getAllCars() {
    _carApi.get()
      //res.data is axios
      //this is a callback function
      //map is going to itterate array with d and replace with new car
      .then(res => {
        let data = res.data.data.map(d => new Car(d))
        //put it in set state
        //cars is property 
        //data is the data we just created
        //data is an array of cars
        _setState('cars', data)

      })
  }
}