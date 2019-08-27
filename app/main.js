import JedController from "./Controllers/JedController.js";


class App {
    constructor() {
        this.controllers = {
            jedController: new JedController()
        }
    }
}

window['app'] = new App()