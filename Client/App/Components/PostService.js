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

}