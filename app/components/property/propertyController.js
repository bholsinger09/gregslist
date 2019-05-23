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

function _drawButton() {
  document.getElementById('propertButton-container').innerHTML = `<button onclick="app.controllers.propertiesController.renderProperties()">Properties</button>
  `
}

function _drawForm() {
  document.getElementById('properties').innerHTML = `
   
  <form class="row" onsubmit="app.controllers.carController.addProperty(event)">
     
        <div class="form-group col-4">
          <label for="number of rooms">Number of rooms: </label>
          <input type="text" class="form-control" id="rooms" name="rooms" placeholder="enter number of rooms">
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  
  
  
  `
}




//Public
export default class PropertiesController {
  constructor() {
    //register subscribers
    _propertiesService.addSubscriber('properties', _drawButton)

    //get data
    _propertiesService.getAllProperties()
  }

  renderProperties() {
    _drawProperties();
    _drawForm();

  }

  addProperty(event) {
    event.preventDefault();
    let form = event.target
    let propertyData = {


      bedrooms: form.bedrooms.value,


    }
    _propertiesService.addProperties(propertyData)
    form.reset()
  }



  delete(id) {
    _propertiesService.delete(id)
  }


}