import { observer } from 'mobx-react-lite';
import React from 'react';
import PropTypes from "prop-types";

function ProfileCard({ profile }) {

  return (

    <div className="ProfileCard">

    </div>
  )

}

ProfileCard.propTypes = {
  profile: PropTypes.object.isRequired
}

export default observer(ProfileCard)