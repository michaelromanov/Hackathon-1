export default class Post {
  constructor(data) {
    this._id = data._id
    this.username = data.username || data.user.name
    this.name = data.name
    this.difficulty = data.difficulty
    this.description = data.description
    this.directions = data.directions
    this.votes = data.votes
    this.comments = data.comments
    this.trailName = data.trailName

    if (typeof data.photos == "string" || data.photos.length > 0) {
      this.photos = typeof data.photos == "string" ? data.photos : data.photos[0].url
    } else {
      this.photos = "//placehold.it/200X200"
    }
  }

  get Template() {
    return `
        <h3 class="d-flex justify-content-between postTitle">${this.name}<span>Author: ${this.username} </span></h3>
        <div class="row">
          <div class="col-4">
            <img src="${this.photos}" alt="Image">
          </div>
          
          <div class="col-8">
            <h5>Trail Description</h5>
            <p>${this.description}</p>
            <h5>Directions</h5>
            <p>${this.directions}</p>
            <h5>Difficulty Level: ${this.difficulty}</h5>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary" onclick="app.controllers.postController.upVote('${this._id}')">Up
                Vote</button>
              <button type="button" class="btn btn-secondary" onclick="app.controllers.postController.downVote('${this._id}')">Down Vote</button>
            </div>
            <button type="button" class="btn btn-primary">
              Score <span class="badge badge-light" id="voteCount">${this.votes}</span>
            </button>
            
            <br /><br />
            <h5 class="d-flex justify-content-between align-items-center">Comments<span><button type="button"
                  class="btn btn-primary" data-toggle="modal" data-target="#post${this._id}-modal">Add Comments</button></span>
            </h5>
            </div>
            </div>
            </div>
        <div class="modal" tabindex="-1" role="dialog" id="post${this._id}-modal">
            <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Comments</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onsubmit="app.controllers.postController.comment(event, '${this._id}')">
          <div class="modal-body">
            <label for="username" class="col-form-label">Enter Username*</label>
            <input class="form-control" size="30" type="text" name="username" placeholder="Username" id="username" required>
            <label for="commentDesc" class="col-form-label">Description*</label>
            <textarea name="commentDesc" id="commentDesc" cols="55" rows="5" placeholder="Enter comments" required></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
          </form>
        </div>
      </div>
      </div>
    `
  }


}
