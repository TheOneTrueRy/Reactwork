import { observer } from 'mobx-react-lite';
import React from 'react';
import { IoIosPaperPlane } from "react-icons/io";
import { AppState } from "../AppState.js";
import { Post } from "../models/Post.js";
import { BindEditable } from "../utils/FormHandler.js";
import { postService } from "../services/PostService.js";
import Pop from "../utils/Pop.js";
import { Link } from "react-router-dom";


function PostForm() {
  const user = AppState.account
  let editable = new Post({})
  let bindEditable = BindEditable(editable)
  
  async function createPost(){
    try {
      window.event.preventDefault()
      await postService.createPost(editable)
      editable = new Post({})
    }
    catch (error){
      Pop.error(error.message);
    }
  }
  return (

    <div className="PostForm">
                  {user != null && <div className="row shadow mb-3 mt-4 bg-light py-3">
              <div className="col-2 d-flex align-content-start justify-content-center">
                <Link to={`profiles/${user.id}`}>
                <img src={user.picture} alt="Your Profile Picture" className="rounded-circle border border-primary post-pfp hover"/>
                </Link>
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
  )

}
export default observer(PostForm)