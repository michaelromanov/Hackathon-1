import UserService from '../Services/UserService'
import express from 'express'

let _service = new UserService()
let _repo = _service.repository

export default class UserController {

  constructor() {
    this.router = express.Router()
      .get('', this.getAllUsers)
      .get('/:id', this.getUser)
      .post('', this.createUser)
      .use('*', this.defaultRoute)
  }

  async getAllUsers(req, res, next) {
    try {
      let users = await _repo.find()
      return res.send(users)
    } catch (error) { next(error) }
  }

  async getUser(req, res, next) {
    try {
      let user = await _repo.findById({ _id: req.params.id })
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