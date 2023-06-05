import React from "react";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { postService } from "../services/PostService.js";
import { observer } from "mobx-react";
import { IoIosPaperPlane } from "react-icons/io";
import { Post } from "../models/Post.js";
import { BindEditable } from '../utils/FormHandler.js';

function HomePage() {

  const posts = AppState.posts
  const olderPosts = AppState.olderPosts
  const user = AppState.account
  let editable = new Post({})
  let bindEditable = BindEditable(editable)

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
      window.event.preventDefault()
      const postData = editable
      await postService.createPost(postData)
      editable = new Post({})
    }
    catch (error){
      Pop.error(error.message);
    }
  }

  return (
    <div className="home-page">
      <div className="container my-4">
        <div className="row">
          <div className="col-12 pt-4 px-5">
            {user != null && <div className="row shadow mb-3 mt-4 bg-light py-3">
              <div className="col-2 d-flex align-content-start justify-content-center">
                <img src={user.picture} alt="Your Profile Picture" className="rounded-circle border border-primary post-pfp"/>
              </div>
                <div className="col-10">
              <form onSubmit={createPost} key={editable.id}>
                  <div className="row">
                    <div className="col-12">
                      <textarea required name="body" id="body" value={editable.body} onChange={bindEditable} rows={8} className="form-control w-100 bg-light" placeholder="Whatcha thinkin?" />
                    </div>
                    <div className="col-6 d-flex justify-content-start pt-2">
                      <input type="url" name="imgUrl" id="imgUrl" value={editable.imgUrl} onChange={bindEditable} className="form-control w-100 bg-light" placeholder="Img URL (Optional)"/>
                    </div>
                    <div className="col-6 d-flex justify-content-end pt-2">
                      <button type="submit" className="btn btn-dark d-flex align-items-center"><IoIosPaperPlane className="me-1"/>Post</button>
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
                  <span className="">{new Date(post.createdAt).toLocaleString()}</span>
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