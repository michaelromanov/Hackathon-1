import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  content: { type: String, required: true },
  // postId: 
}, { timestamps: true })

let _photoSchema = new mongoose.Schema({
  url: { type: String, required: true }
})

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: ObjectId, ref: "user", required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  directions: { type: String },
  votes: { type: Number, default: 0 },
  comments: [_commentSchema],
  photos: [_photoSchema]
}, { timestamps: true })

export default class PostService {
  get repository() {
    return mongoose.model('trail', _schema)
  }

  async commentsRoute(id, comment) {
    try {
      let post = await this.repository.findById(id)
      if (!comment._id) {
        post.comments.push(comment)
      } else {
        post.comments.forEach((c, i, a) => {
          if (c._id.toString() == comment._id) {
            a.splice(i, 1)
          }
        })
      }
      await post.save()
      return post
    } catch (error) {
      throw error
    }
  }

  // async commentsRoute(id, comment) {
  //   try {
  //     // need to query the db for the photo with this id
  //     // depending on properties of the comment either
  //     // save the photo

  //     let photo = await this.repository.findById(id)
  //     // add a comment
  //     if (!comment._id) {
  //       photo.comments.push(comment)
  //     } else { // delete a comment
  //       photo.comments.forEach((c, i, a) => {
  //         if (c._id.toString() == comment._id) {
  //           a.splice(i, 1)
  //         }
  //       })
  //     }
  //     await photo.save()
  //     return photo
  //   } catch (error) {
  //     throw error
  //   }
  // }
}
