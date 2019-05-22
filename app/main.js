import CarController from "./components/car/carControler.js";

class App {

  constructor() {
    this.controllers = {
      carController: new CarController
    }
  }
}

window['app'] = new App()