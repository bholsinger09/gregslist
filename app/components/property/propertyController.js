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

function _drawForm() {
  document.getElementById('properties').innerHTML = `
   <form class = "row" onsubmit="app.controllers.propertiesController.addProperty(event)" >
  <div class="form-row align-items-center">
    <div class="col-auto my-1">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Number of rooms: </label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>

    <div class="col-auto my-1">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form> 
  
  
  
  
  `
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
    //_drawForm();

  }

  // addProperty(event) {
  //   event.preventDefault();
  //   let form = event.target
  //   let propertyData = {


  //     bedrooms: form.bedrooms.value,
  //     bathrooms: form.bathrooms.value,
  //     imgUrl: form.imgUrl.value,
  //     levels: form.levels.value,
  //     year: form.year.value,
  //     price: form.price.value,
  //     description: form.description.value,

  //   }
  //   _propertiesService.addProperties(propertyData)
  //   form.reset()
  // }



  delete(id) {
    _propertiesService.delete(id)
  }


}