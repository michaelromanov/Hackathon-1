import PostService from "../Services/PostService.js";
//PRIVATE

const _postService = new PostService()

function _drawPosts() {
  console.log("drawPosts Working")

  let posts = _postService.Posts
  let template = ''
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i]
    template += post.Template + _drawComments(post.comments)
  }
  document.getElementById("newPost").innerHTML = template
}

function _drawComments(comments) {
  let template = ''
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i]
    template += comment.Template
  }
  return template
}

//PUBLIC
export default class PostController {
  constructor() {
    _postService.addSubscriber('posts', _drawPosts)
    _postService.getPosts()
  }

  addPost(e) {
    e.preventDefault()
    let form = e.target
    // #region Radio Group Logic
    let difficulty
    for (let i = 0; i < form.length; i++) {
      let input = form[i]
      if (input.type == 'radio' && input.checked) {
        difficulty = input.name
      }
    }
    // #endregion
    let post = {
      description: form.description.value,
      name: form.username.value,
      // trailName: form.trailName.value,
      directions: form.directions.value,
      photos: [{ url: form.image.value }],
      difficulty: difficulty,
      user: '5cf185593a36fb53008472ab'
    }
    _postService.addPost(post)
    console.log(post)
  }

  addComment(e) {
    e.preventDefault()
    let form = e.target
    let post = {
      username: form.username.value,
      commentDesc: form.commentDesc.value,
    }
    _postService.addComment(post)
  }

  upVote(id) {
    _postService.upVote(id)
  }

  downVote(id) {
    _postService.downVote(id)
  }
}