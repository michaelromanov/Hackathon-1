import UserService from '../Services/UserService'
import express from 'express'

let _service = new UserService()
let _repo = _service.repository

export default class UserController {

  constructor() {
    this.router = express.Router()
      .get('/:name', this.getUser)
      .post('', this.createUser)
      .use('*', this.defaultRoute)
  }

  async getUser(req, res, next) {
    try {
      let user = await _repo.findOne({ name: req.params.name })
      return res.send(user)
    } catch (error) { next(error) }
  }

  async createUser(req, res, next) {
    try {
      let user = await _repo.create(req.body)
      return res.status(201).send(user)
    } catch (error) { next(error) }
  }

  defaultRoute(req, res, next) {
    next({ status: 400, message: 'No Such User' })
  }
}