import Post from "../Models/Post.js";


const postApi = axios.create({
  baseURL: 'localhost:3000/api/trails',
  timeout: 3000
})

let _state = {
  trails: []
}

let _subscribers = {
  trails: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

export default class PostService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getPosts() {
    postApi.get()
      .then(res => {
        let data = res.data.data.map(t => new Post(t))
        _setState('posts', data)
      })
      .catch(err => _setState('error', err.response.data))
  }

  addPost(todo) {
    postApi.post('', todo)
      .then(res => {
        this.getPosts()
      })
      .catch(err => _setState('error', err.response.data))
  }

  removePost(postId) {
    postApi.delete(postId)
      .then(res => {
        this.getPosts()
      })
  }

}