import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostService {
  async getPosts() {
    const res = await api.get('/api/posts')
    logger.log(res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.olderPosts = res.data.older
    AppState.newerPosts = res.data.newer
  }

}

export const postService = new PostService()