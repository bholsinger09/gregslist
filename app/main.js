import CarController from "./components/car/carController";


class App {

  constructor() {
    this.controllers = {
      carController: new CarController
    }
  }
}

window['app'] = new App()