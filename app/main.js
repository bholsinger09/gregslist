import CarController from "./components/car/carController.js";
import PropertiesController from "./components/property/propertyController.js";


class App {

  constructor() {
    this.controllers = {
      carController: new CarController,
      propertiesController: new PropertiesController
    }



  }
}

window['app'] = new App()