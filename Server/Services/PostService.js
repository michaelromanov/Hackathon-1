import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _photoSchema = new mongoose.Schema({
  url: { type: String, required: true }
})

let _schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  user: { type: ObjectId, ref: "user", required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true }, //String here??
  location: { type: String, required: true },
  photo: [_photoSchema]
}, { timestamps: true })

export default class PostService {
  get repository() {
    return mongoose.model('trail', _schema)
  }
}