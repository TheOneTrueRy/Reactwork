import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppState } from "../AppState.js";
import ProfileCard from "../components/ProfileCard.jsx";
import PostCard from "../components/PostCard.jsx";

function SearchPage() {
  const searchedPosts = AppState.searchedPosts
  const searchedProfiles = AppState.searchedProfiles
  return (

    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-10 offset-1 border-bottom border-dark text-center">
            <span className="fs-2">Profiles</span>
          </div>
          {searchedProfiles.length > 0 ? <div className="col-12 px-5 my-3">
            {searchedProfiles.map((profile) => (
              <ProfileCard profile={profile} key={profile.id} />
            ))}
          </div> : <div className="col-12 my-3 text-center">
            <span className="fs-2">No Profiles Found</span>
          </div>}
          <div className="col-10 offset-1 border-bottom border-dark text-center">
            <span className="fs-2">Posts</span>
          </div>
          {searchedPosts.length > 0 ? <div className="col-12 px-5 my-3">
            {searchedPosts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div> : <div className="col-12 my-3 text-center">
            <span className="fs-2">No Posts Found</span>
          </div>}
        </div>
      </div>
    </>
  )

}
export default observer(SearchPage)