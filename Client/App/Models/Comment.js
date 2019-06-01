export default class Comment {
  constructor(data) {
    this.user = data.user
    this.content = data.content
    this._id = data._id
  }

  get Template() {
    return `
        <div class="comment col-8 offset-4">
          <p>Author: ${this.user}</p>
          <p>${this.content}</p>
        </div>
        <br /><br />
    `
  }
}