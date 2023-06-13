import { observer } from 'mobx-react-lite';
import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function ProfileCard({ profile }) {

  return (

    <>
      <div className="row shadow my-2 py-2 bg-light">
        <div className="col-2 d-flex align-items-center justify-content-center">
          <Link to={`profiles/${profile.id}`}>
            <img src={profile.picture} alt={`${profile.name}'s Profile Picture`} title={`Visit ${profile.name}'s profile page!`} className="profile-card-pfp rounded-circle border border-primary hover" />
          </Link>
        </div>
        <div className="col-10 d-flex flex-column justify-content-center">
          <span className="fs-2">{profile.class}</span>
          <Link to={`profiles/${profile.id}`}>
            <span className="fs-1 fw-bold text-dark">{profile.name}</span>
          </Link>
        </div>
      </div>
    </>
  )

}

ProfileCard.propTypes = {
  profile: PropTypes.object.isRequired
}

export default observer(ProfileCard)