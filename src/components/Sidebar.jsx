import React from 'react';
import { AppState } from '../AppState.js';
import Login from "./Login.jsx";
import { AuthService } from "../services/AuthService.js";
import { observer } from "mobx-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { Link } from "react-router-dom";

function Sidebar() {

  function logout() {
    localStorage.removeItem('user-token')
    AuthService.logout({})
  }

  const account = AppState.account

  return (
    <>
      {account != null &&
        <>
          <div className="col-12 d-flex align-items-center justify-content-center top pt-3">
            <Link to={`profiles/${account.id}`}>
              <img src={account.picture} alt="account photo" height="200" width="200" className="rounded-circle border border-2 border-dark elevation-1" />
            </Link>
          </div>
          <div className="col-12 text-center pt-4 px-4">
            <span className="fs-5">{account.class} {account.graduated ? 'Graduate' : ''}</span>
            <div className="text-center">
              <span className="fs-3 fw-bold">{account.name}</span>
            </div>
          </div>
          <div className="col-12 d-flex align-items-center justify-content-center pt-3 pb-5">
            <Link to={`profiles/${account.id}`} title="Visit Your Profile Page">
              <button className="btn btn-dark" type="button">My Profile</button>
            </Link>
          </div>
          <div className="col-12 d-flex flex-column align-items-center middle pt-1">
            <div>
              {account.github !== '' && <a href={account.github} className="text-dark" target="_blank" rel="noreferrer" title="Visit your GitHub page.">
                <span className="fs-4 d-flex align-items-center"><FaGithub className="me-1" />GitHub</span>
              </a>}
              {account.linkedin !== '' && <a href={account.linkedin} className="text-dark" target="_blank" rel="noreferrer" title="Visit your LinkedIn page.">
                <span className="fs-4 d-flex align-items-center mt-3"><FaLinkedin className="me-1" />LinkedIn</span>
              </a>}
              {account.resume !== '' && <a href={account.resume} className="text-dark" target="_blank" rel="noreferrer" title="Visit your Resume page.">
                <span className="fs-4 d-flex align-items-center mt-3"><CgNotes className="me-1" />Resume</span>
              </a>}
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center mt-5">
            <button className="btn btn-dark" onClick={logout}>
              <span>LOGOUT</span>
            </button>
          </div>
        </>}
      {account == null &&
        <>
          <div className="col-12 d-flex align-items-center justify-content-center pt-5">
            <Login />
          </div>
        </>}
    </>
  )

}

export default observer(Sidebar)