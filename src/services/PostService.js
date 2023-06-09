import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostService {
  async deletePost(postId) {
    const res = await api.delete('api/posts/' + postId)
    let postIndex = AppState.posts.findIndex(p => p.id == postId)
    if (postIndex != -1) {
      AppState.posts.splice(postIndex, 1)
    }
  }

  async searchPosts(query) {
    const res = await api.get('api/posts', { params: query })
    AppState.searchedPosts = res.data.posts.map(p => new Post(p))
    logger.log(AppState.searchedPosts, '[Searched Posts]')
  }

  async createPost(postData) {
    const res = await api.post('/api/posts', postData)
    AppState.posts.unshift(new Post(res.data))
  }

  async loadMore(url) {
    const res = await api.get(url)
    const additionalPosts = res.data.posts.map(p => new Post(p))
    AppState.posts = [...AppState.posts, ...additionalPosts]
    AppState.olderPosts = res.data.older
  }

  async getPosts() {
    const res = await api.get('/api/posts')
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.olderPosts = res.data.older
  }

  async likePost(postId) {
    const res = await api.post(`/api/posts/${postId}/like`)
    let postIndex = AppState.posts.findIndex(post => post.id == postId)
    AppState.posts.splice(postIndex, 1, new Post(res.data))
  }

}

export const postService = new PostService()