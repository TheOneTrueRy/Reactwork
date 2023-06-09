import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { AppState } from "../AppState.js";
import ProfileDetails from "../components/ProfileDetails.jsx";
import Pop from "../utils/Pop.js";
import { profileService } from "../services/ProfileService.js";

function ProfilePage() {
  const {profileId} = useParams()
  const profile = AppState.profile
  const profilePosts = AppState.posts.filter(post => post.creatorId == profileId)

  async function getProfile(){
    try {
      profileService.getProfile(profileId)
    }
    catch (error){
      Pop.error(error);
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (

    <>
    <div className="col-12 px-5">
      <ProfileDetails profile={profile}/>
    </div>
    </>
  )

}
export default observer(ProfilePage)