import Post from "../Models/Post.js";


const postApi = axios.create({
  baseURL: '//localhost:3000/api/posts',
  timeout: 3000
})

let _state = {
  posts: []
}

let _subscribers = {
  posts: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

export default class PostService {

  get Posts() {
    return _state.posts.map(p => new Post(p))
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getPosts() {
    postApi.get()
      .then(res => {
        let data = res.data.map(t => new Post(t))
        _setState('posts', data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addPost(post) {
    postApi.post('', post)
      .then(res => {
        this.getPosts()
      })
      .catch(err => {
        console.error(err)
      })
  }

  addComment(post) {
    postApi.post('', post)
      .then(res => {
        this.getPosts()
      })
      .catch(err => {
        console.error(err)
      })
  }

  removePost(postId) {
    postApi.delete(postId)
      .then(res => {
        this.getPosts()
      })
  }

  upVote(id) {
    postApi.put(id + '/up')
      .then(res => {
        this.getPosts()
      })
  }

  downVote(id) {
    postApi.put(id + '/down')
      .then(res => {
        this.getPosts()
      })
  }

}