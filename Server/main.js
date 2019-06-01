import cors from 'cors'
import express from 'express'
import './db/dbconfig'

let port = 3000
let server = express()
let bp = require('body-parser')

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())
server.use(cors())

//Register Routes
import UserController from './controllers/UserController'
import PostController from './controllers/PostController'


server.use('/api/users', new UserController().router)
server.use('/api/posts', new PostController().router)


server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } })
})
server.listen(port, () => {
  console.log('Server Running on', port)
})