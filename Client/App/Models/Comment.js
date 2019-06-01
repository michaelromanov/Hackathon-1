export default class Comment {
  constructor(data, postId) {
    this.user = data.user
    this.content = data.content
    this._id = data._id,
      this.postId = postId
  }

  get Template() {
    return `
        <div class="comment col-8 offset-4">
          <p>Author: ${this.user}</p>
          <p>${this.content}</p>
          <button class="btn btn-danger" onclick="app.controllers.postController.deleteComment('${this._id}', '${this.postId}')">Delete</button>
        </div>
        <br /><br />
    `
  }
}