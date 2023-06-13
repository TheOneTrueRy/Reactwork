import PropTypes from "prop-types";
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { AppState } from "../AppState.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { BindEditable } from "../utils/FormHandler.js";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { accountService } from "../services/AccountService.js";

function ProfileDetails({ profile }) {
  const account = AppState.account
  let editable = { ...AppState.account }
  let bindEditable = BindEditable(editable)

  async function editAccount() {
    try {
      window.event.preventDefault()
      logger.log({ editable })
      accountService.editAccount(editable)
    }
    catch (error) {
      Pop.error(error);
    }
  }

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
              {profile.github !== '' && <a href={profile.github} target="_blank" rel="noreferrer" title={`Visit ${profile.name}'s GitHub page.`}>
                <FaGithub className="me-3 fs-2 text-dark" />
              </a>}
              {profile.linkedin !== '' && <a href={profile.linkedin} target="_blank" rel="noreferrer" title={`Visit ${profile.name}'s LinkedIn page.`}>
                <FaLinkedin className="me-3 fs-2 text-dark" />
              </a>}
              {profile.resume !== '' && <a href={profile.resume} target="_blank" rel="noreferrer" title={`Visit ${profile.name}'s Resume page.`}>
                <CgNotes className="me-3 fs-2 text-dark" />
              </a>}
            </div>
            <div className="col-12 d-flex flex-column pt-1 ps-5">
              <span className="fs-5">{profile.class} {profile.graduated == true ? 'Graduate' : ''}</span>
              <span className="fs-4 fw-bold">{profile.name}</span>
            </div>
            <div className="col-12 ps-5 pt-3">
              <span><i>{profile.bio}</i></span>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-end pb-2">
          {profile.id == account?.id && <button className="btn btn-outline-primary" type="button" title="Edit Your Profile" data-bs-toggle={"offcanvas"} data-bs-target={"#editOffcanvas"}>Edit</button>}
        </div>
      </div> : <div className="ms-3"><span className="fs-1">Loading...</span></div>}
      {/* BOOTSTRAP OFFCANVAS */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="editOffcanvas" aria-labelledby="editOffcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="editOffcanvasLabel">Offcanvas right</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <form onSubmit={editAccount}>
            <label className="mt-2" htmlFor="name">Name</label>
            <input required type="text" name="name" id="name" defaultValue={editable.name} onChange={bindEditable} className="form-control bg-light" placeholder="Name..." maxLength={50} />
            <label className="mt-2" htmlFor="picture">Profile Picture</label>
            <input required type="url" name="picture" id="picture" defaultValue={editable.picture} onChange={bindEditable} className="form-control bg-light" placeholder="Profile Picture URL..." maxLength={300} />
            <label className="mt-2" htmlFor="bio">Bio</label>
            <input type="text" name="bio" id="bio" defaultValue={editable.bio} onChange={bindEditable} className="form-control bg-light" placeholder="Bio..." maxLength={1000} />
            <label className="mt-2" htmlFor="coverImg">Cover Image</label>
            <input type="url" name="coverImg" id="coverImg" defaultValue={editable.coverImg} onChange={bindEditable} className="form-control bg-light" placeholder="Cover Image URL..." maxLength={300} />
            <label className="mt-2" htmlFor="github">GitHub URL</label>
            <input type="url" name="github" id="github" defaultValue={editable.github} onChange={bindEditable} className="form-control bg-light" placeholder="GitHub URL..." maxLength={300} />
            <label className="mt-2" htmlFor="linkedin">LinkedIn URL</label>
            <input type="url" name="linkedin" id="linkedin" defaultValue={editable.linkedin} onChange={bindEditable} className="form-control bg-light" placeholder="LinkedIn URL..." maxLength={300} />
            <label className="mt-2" htmlFor="resume">Resume URL</label>
            <input type="url" name="resume" id="resume" defaultValue={editable.resume} onChange={bindEditable} className="form-control bg-light" placeholder="Resume URL..." maxLength={300} />
            <label className="mt-2" htmlFor="class">Class</label>
            <input type="text" name="class" id="class" defaultValue={editable.class} onChange={bindEditable} className="form-control bg-light" placeholder="Class of..." maxLength={40} />
            <label className="mt-2" htmlFor="graduated">Graduated?</label>
            {/* FIXME Box is not reactively checked if opening offcanvas/form while graduated is true. */}
            <input type="checkbox" name="graduated" id="graduated" defaultValue={editable.graduated} onChange={bindEditable} className="ms-2" />
            <button className="btn btn-outline-primary ms-5" type="submit">Finish Editing</button>
          </form>
        </div>
      </div>
    </>


  )
}

ProfileDetails.propTypes = {
  profile: PropTypes.object.isRequired
}

export default observer(ProfileDetails)