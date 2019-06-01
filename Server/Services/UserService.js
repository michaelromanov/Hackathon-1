import mongoose from 'mongoose'

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
}, { timestamps: true })

export default class UserService {
  get repository() {
    return mongoose.model('user', _schema)
  }
}