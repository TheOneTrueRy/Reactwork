import React from "react";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { postService } from "../services/PostService.js";
import { observer } from "mobx-react";
import PostCard from "../components/PostCard.jsx";
import PostForm from "../components/PostForm.jsx";

function HomePage() {

  const posts = AppState.posts
  const olderPosts = AppState.olderPosts

  async function loadMore(){
    try {
      await postService.loadMore(AppState.olderPosts)
    }
    catch (error){
      Pop.error(error);
    }
  }

  return (
    <div className="home-page">
      <div className="container my-4">
        <div className="row">
          <div className="col-12 pt-4 px-5">
            <PostForm/>
          </div>
          <div className="col-12 py-3 px-5">
            {posts.map((post) => (
              <PostCard post={post} key={post.id}/>
            ))}
          </div>
          <div className="col-12 py-4 px-5 d-flex justify-content-center align-items-center">
              {olderPosts !== null && <button className="btn btn-dark" onClick={loadMore}>Load More</button>}
              {olderPosts == null && <button className="btn btn-dark" disabled>Load More</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(HomePage)