

export class Post{
  constructor(data){
    this.id = data.id
    this.body = data.body
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.likes = data.likes
    this.likeIds = data.likeIds
    this.imgUrl = data.imgUrl || ''
    this.createdAt = new Date(data.createdAt).toLocaleString()
  }
}