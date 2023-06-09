import { PropTypes } from "mobx-react";
import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppState } from "../AppState.js";

function ProfileDetails({profile}) {
  const account = AppState.account
  return (
    <>
      <div className="row shadow mt-2 py-2 bg-light">
        <div className="col-12">
          <img src={profile.coverImg} alt={`${profile.name}'s Cover Image`} className="w-100 vh-20"/>
        </div>
        <div className="col-12 move-up">
          <div className="row">
            <div className="col-3 text-center">
              <img src={profile.picture} alt={`${profile.name}'s Profile Picture`} className="pfp rounded-circle border-primary"/>
            </div>
            <div className="col-9 d-flex justify-content-end">

            </div>
            <div className="col-12 d-flex flex-column">
              <span className="fs-5">{profile.class}</span>
              <span className="fs-4 fw-bold">{profile.name}</span>
            </div>
            <div className="col-12">
              <span><i>{profile.bio}</i></span>
            </div>
            <div className="col-12 d-flex justify-content-end">
              {profile.id == account.id && <button className="btn btn-outline-primary" type="button" title="Edit Your Profile">Edit</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ProfileDetails.propTypes = {
  profile: PropTypes.objectOrObservableObject.isRequired
}

export default observer(ProfileDetails)