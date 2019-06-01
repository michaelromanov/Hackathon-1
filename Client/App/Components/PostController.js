import PostService from "./PostService.js";
//PRIVATE



const _postService = new PostService()

function _drawPosts() {
  console.log("drawPosts Working")
  let posts = _postService //Posts????

  let template = ''

}

let totalVoteCount = 0

function upVote(id) {
  _postService.upVote(id)

}
  // document.getElementById('voteCount').innerHTML += totalVoteCount
}


function downVote() {
  document.getElementById('voteCount').innerHTML = totalVoteCount - 1
}
//upvote button adds 1 to the total count
//downvote button subtracts 1 from total count
//count total determines placement on page



//PUBLIC
export default class PostController {
  constructor() {
    _postService.addSubscriber('posts', _drawPosts)
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
      trailName: form.trailName.value,
      directions: form.directions.value,
      photos: form.image.value,
      difficulty: difficulty,
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
    _postService.add
  }
}