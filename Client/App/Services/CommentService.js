
const postApi = axios.create({
  baseURL: '//localhost:3000/api/comments'
})

let _state = {
  comments: []
}

let _subscribers = {
  comments: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}


export default class CommentService {

  get Comments() {
    return _state.posts
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getComments() { }
}