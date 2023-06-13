import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { AppState } from "../AppState.js";
import ProfileDetails from "../components/ProfileDetails.jsx";
import Pop from "../utils/Pop.js";
import { profileService } from "../services/ProfileService.js";
import PostForm from "../components/PostForm.jsx";
import PostCard from "../components/PostCard.jsx";


function ProfilePage() {
  const { profileId } = useParams()
  const profile = AppState.profile
  const profilePosts = AppState.posts.filter(post => post.creatorId == profileId)
  const account = AppState.account

  async function getProfile() {
    try {
      profileService.getProfile(profileId)
    }
    catch (error) {
      Pop.error(error);
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (

    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-12 px-5">
            <ProfileDetails profile={profile} />
          </div>
          {account?.id == profile?.id &&
            <div className="col-10 offset-1 px-5">
              <PostForm />
            </div>}
          <div className="col-12 py-3 px-5">
            {profilePosts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )

}
export default observer(ProfilePage)