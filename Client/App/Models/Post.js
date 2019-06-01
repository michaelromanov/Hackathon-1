export default class Post {
  constructor(data) {
    this._id = data._id
    this.name = data.name
    this.difficulty = data.difficulty
    this.description = data.description
    this.directions = data.directions
    this.votes = data.votes
    this.photos = data.photos
    this.commentDesc = data.commentDesc
    this.trailName = data.trailName
  }

  get Template() {
    return `
        <h3 class="d-flex justify-content-between postTitle">${this.name}<span>Author: Courtney </span></h3>
        <div class="row">
          <div class="col-4">
            <img
              src="https://www.alltrails.com/api/alltrails/photos/22781792/image?size=extra_large&api_key=3p0t5s6b5g4g0e8k3c1j3w7y5c3m4t8i"
              alt="Image From Table Rock Trail">
          </div>
          <div class="row">
          <div class="col-8">
            <h5>Trail Description</h5>
            <p>${this.description}</p>
            <h5>Directions</h5>
            <p>${this.directions}</p>
            <h5>Difficulty Level: ${this.difficulty}</h5>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary" onclick="app.controllers.postController.upVote(${this._id})">Up
                Vote</button>
              <button type="button" class="btn btn-secondary" onclick="app.controllers.postController.downVote(${this._id})>Down Vote</button>
            </div>
            <button type="button" class="btn btn-primary">
              Score <span class="badge badge-light" id="voteCount">${this.votes}</span>
            </button>
            <br /><br />
            <h5 class="d-flex justify-content-between align-items-center">Comments<span><button type="button"
                  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">Add Comments</button></span>
            </h5>
            </div>
            </div>
            </div>
    `
  }


}
