import PostService from "./PostService.js";
//PRIVATE



const _postService = new PostService()

function _drawPosts() {
  console.log("drawPosts Working")
  let posts = _postService //Posts????

  let template = ''

}



//PUBLIC
export default class PostController {
  constructor() {
    _postService.addSubscriber('error', _drawPosts)
  }

  addPost(e) {
    e.preventDefault()
    var form = e.target
    var todo = {
      description: form.description.value
    }
  }
}