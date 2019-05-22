import CarController from "./components/car/carController.js";


class App {

  constructor() {
    this.controllers = {
      carController: new CarController
    }
  }
}

window['app'] = new App()