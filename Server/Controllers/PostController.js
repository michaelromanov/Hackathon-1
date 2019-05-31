import express from 'express'
import PostService from '../services/PostService'

let _service = new PostService()
let _repo = _service.repository


export default class PostController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllPosts)
      .get('/:id', this.getPost)
      .get('/:user', this.getPostByUser)
      .post('', this.createPost)
      .delete('/:id', this.deletePost)
      .use("*", this.defaultRoute)
  }

  async getAllPosts(req, res, next) {
    try {
      let posts = await _repo.find({})
      return res.send(posts)
    } catch (error) { next(error) }
  }

  async getPost(req, res, next) {
    try {
      let post = await _repo.findById(req.params.id)
      return res.send(post)
    } catch (error) { next(error) }
  }

  async getPostByUser(req, res, next) {
    try {
      let post = await _repo.findOne(req.params.name)
      return res.send(post)
    } catch (error) { next(error) }
  }

  async createPost(req, res, next) {
    try {
      let post = await _repo.create(req.bod)
      return res.status(201).send(post)
    } catch (error) { next(error) }
  }

  async deletePost(req, res, next) {
    try {
      let post = await _repo.findByIdAndDelete(req.params.id)
      return res.send('Successfully Deleted')
    } catch (error) { next(error) }
  }

  defaultRoute(req, res, next) {
    next({ status: 400, message: 'no such post' })
  }

}