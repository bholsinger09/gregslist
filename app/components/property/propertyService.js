import Properties from "../../models/property.js";

//Private
let _propertiesApi = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses'
})


let _state = {
  properties: []

}

let _subscribers = {
  properties: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}

//Public

export default class PropertiesService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Properties() {
    return _state.properties.map(p => new Properties(p))
  }

  getAllProperties() {
    _propertiesApi.get() // get the Properties
      .then(response => {
        let data = response.data.data.map(d => new Properties(d))
        _setState('properties', data)
      })
      .catch(err => console.error(err))
  }

  addProperties(propertiesData) {
    _propertiesApi.post('', propertiesData)
      .then(res => {
        this.getAllProperties()
      })
      .catch(err => console.error(err))
  }


  delete(id) {
    _propertiesApi.delete(id)
      .then(res => {
        this.getAllProperties()
      })
  }

}