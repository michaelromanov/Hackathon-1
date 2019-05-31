import express from 'express'
import TrailService from '../services/TrailService'

let _service = new TrailService()
let _repo = _service.repository

export default class TrailController {
  constructor() {
    this.router = express.Router()

  }
}