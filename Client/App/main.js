import PostController from "./Components/PostController.js";




class App {
  constructor() {
    this.controllers = {
      postController: new PostController
    }
  }
}
window['app'] = new App()