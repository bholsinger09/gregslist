import PropertiesService from "./propertyService.js";

//Private
let _propertiesService = new PropertiesService

function _drawProperties() {
  let properties = _propertiesService.Properties
  let template = ''
  properties.forEach(property => {
    template += property.Template
  })
  document.getElementById('properties').innerHTML = template
}


//Public
export default class PropertiesController {
  constructor() {
    //register subscribers
    _propertiesService.addSubscriber('properties', _drawProperties)

    //get data
    _propertiesService.getAllProperties()
  }

  renderProperties() {
    _drawProperties();

  }





  delete(id) {
    _propertiesService.delete(id)
  }


}