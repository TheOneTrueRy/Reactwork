import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostService {
  async loadMore(url) {
    const res = await api.get(url)
    const additionalPosts = res.data.posts.map(p => new Post(p))
    AppState.posts = [...AppState.posts, ...additionalPosts]
    logger.log(AppState.posts)
    AppState.olderPosts = res.data.older
  }

  async getPosts() {
    const res = await api.get('/api/posts')
    logger.log(res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.olderPosts = res.data.older
  }

}

export const postService = new PostService()