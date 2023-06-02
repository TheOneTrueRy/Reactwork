import React from "react";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { postService } from "../services/PostService.js";
import { observer } from "mobx-react";

function HomePage() {

  const posts = AppState.posts
  const olderPosts = AppState.olderPosts
  const user = AppState.account

  async function loadMore(){
    try {
      await postService.loadMore(AppState.olderPosts)
    }
    catch (error){
      Pop.error(error);
    }
  }

  async function createPost(){
    try {
      await postService.createPost()
    }
    catch (error){
      Pop.error(error);
    }
  }

  return (
    <div className="home-page">
      <div className="container my-4">
        <div className="row">
          <div className="col-12 py-4 px-5">
            {user != null && <div className="row shadow mb-3 mt-4 bg-light py-3">
              <div className="col-2 d-flex align-content-start justify-content-center">
                <img src={user.picture} alt="Your Profile Picture" className="rounded-circle border border-primary post-pfp"/>
              </div>
                <div className="col-10">
              <form onSubmit={createPost}>
                  <div className="row">
                    <div className="col-12">
                      <textarea name="body" id="body" rows={8} className="form-control w-100 bg-light" placeholder="Whatcha thinkin?" />
                    </div>
                    <div className="col-6 g-0 d-flex justify-content-start">

                    </div>
                    <div className="col-6 g-0 d-flex justify-content-end">

                    </div>
                  </div>
              </form>
                </div>
            </div>}
            {user == null && <div className="row shadow mb-3 mt-4 bg-light">
              <div className="col-12 text-center py-5">
                <span className="fs-1">
                  Log-In to post!
                </span>
              </div>
            </div>}
          </div>
          <div className="col-12 py-3 px-5">
            {posts.map((post) => (
              <div className="row my-3 shadow bg-light py-2" key={post.id}>
                {post.creatorId == user?.id && <div className="col-12">

                </div>}
                <div className="col-2 ps-0 text-center">
                  <img src={post.creator.picture} alt={`${post.creator.name}'s Profile Picture`} className="post-pfp rounded-circle border border-dark" />
                </div>
                <div className="col-10 d-flex flex-column justify-content-center g-0">
                  <span className="fs-5 fw-bold">{post.creator.name}</span>
                  <span className="">{post.createdAt}</span>
                </div>
                <div className="col-12 py-2 px-5">
                  <span className="fs-5">{post.body}</span>
                </div>
                <div className="col-12 d-flex justify-content-center g-0">
                  <img src={post.imgUrl} alt="" className="post-img"/>
                </div>
                <div className="col-12 text-end">
                  <span>{post.likes.length} likes</span>
                </div>
              </div>
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