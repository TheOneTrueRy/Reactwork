import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppState } from "../AppState.js";
import  PropTypes  from "prop-types";

function PostCard({post}) {

    const user = AppState.account
  return (
    <div className="row my-3 shadow bg-light py-2">
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
  )

}

PostCard.propTypes = {
  post: PropTypes.object.isRequired
}

export default observer(PostCard)