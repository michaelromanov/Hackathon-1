export default class Post {
  constructor(data) {
    this._id = data._id
    this.username = data.username
    this.difficulty = data.difficulty
    this.closures = data.closures
  }

  get Template() {
    return `
    
    
    `
  }


}
