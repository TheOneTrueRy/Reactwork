import PropTypes from "prop-types";
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { AppState } from "../AppState.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

function ProfileDetails({ profile }) {
  const account = AppState.account

  useEffect(() => {
    return () => {
      AppState.profile = null
    };
  }, [])

  return (
    <>
      {profile ? <div className="row shadow mb-2 bg-light">
        <div className="col-12 g-0">
          <img src={profile.coverImg} alt={`${profile.name}'s Cover Image`} className="w-100 vh-25" />
        </div>
        <div className="col-12 move-up">
          <div className="row">
            <div className="col-2">
              <img src={profile.picture} alt={`${profile.name}'s Profile Picture`} className="pfp rounded-circle border border-primary" />
            </div>
            <div className="col-10 d-flex justify-content-end align-items-end">
              {profile.github !== '' && <a href={profile.github} target="_blank" rel="noreferrer">
                <FaGithub className="me-3 fs-2 text-dark" />
              </a>}
              {profile.linkedin !== '' && <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="me-3 fs-2 text-dark" />
              </a>}
              {profile.resume !== '' && <a href={profile.resume} target="_blank" rel="noreferrer">
                <CgNotes className="me-3 fs-2 text-dark" />
              </a>}
            </div>
            <div className="col-12 d-flex flex-column pt-1 ps-5">
              <span className="fs-5">{profile.class}</span>
              <span className="fs-4 fw-bold">{profile.name}</span>
            </div>
            <div className="col-12 ps-5 pt-3">
              <span><i>{profile.bio}</i></span>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-end pb-2">
          {profile.id == account.id && <button className="btn btn-outline-primary" type="button" title="Edit Your Profile">Edit</button>}
        </div>
      </div> : <div className="ms-3"><span className="fs-1">Loading...</span></div>}
    </>
  )
}

ProfileDetails.propTypes = {
  profile: PropTypes.object.isRequired
}

export default observer(ProfileDetails)