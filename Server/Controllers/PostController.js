import express from 'express'
import PostService from '../services/PostService'
import UserService from '../Services/UserService';

let _service = new PostService()
let _repo = _service.repository
let _userService = new UserService()
let _userRepo = _userService.repository


export default class PostController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAllPosts)
      .get('/:id', this.getPost)
      .get('/user/:name', this.getPostsByUser)
      // .put('/:id/photos', this.photosRoute)
      .put('/:id/comments', this.commentsRoute)
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

  async getPostsByUser(req, res, next) {
    try {
      let user = await _userRepo.findOne({ name: req.params.name })
      let post = await _repo.find({ user: user._id })
      return res.send(post)
    } catch (error) { next(error) }
  }

  // async photosRoute(res, req, next) {
  //   try {
  //     let photo = await _service.photosRoute(req.params.id, req.body)
  //     return res.status(201).send(photo)
  //   } catch (error) { next(error) }
  // }

  async commentsRoute(req, res, next) {
    try {
      let post = await _service.commentsRoute(req.params.id, req.body)
      return res.status(200).send(post)
    } catch (error) {
      next(error)
    }
  }

  async createPost(req, res, next) {
    try {
      let post = await _repo.create(req.body)
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