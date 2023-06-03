import React from 'react';
import {AppState} from '../AppState.js';
import Login from "./Login.jsx";
import { AuthService } from "../services/AuthService.js";
import { observer } from "mobx-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

function Sidebar() {
  
  function logout() {
    localStorage.removeItem('user-token')
    AuthService.logout({})
  }

  const account = AppState.account

  return (
    <div className="Sidebar pt-5">
    {account != null &&  
      <>
        <div className="col-12 d-flex align-items-center justify-content-center top">
          <img src={account.picture} alt="account photo" height="200" width="200" className="rounded-circle border border-2 border-dark elevation-1" />
        </div>
        <div className="col-12 text-center pt-4 px-4 pb-5">
          <span className="fs-5">{account.class} {account.graduated ? 'Graduate' : ''}</span>
          <div className="text-center">
          <span className="fs-3 fw-bold">{account.name}</span>
          </div>
        </div>
        <div className="col-12 d-flex flex-column align-items-center middle pt-1">
            <div>
              <a href={account.github} className="text-dark">
                <span className="fs-4 d-flex align-items-center"><FaGithub className="me-1"/>GitHub</span>
              </a>
              <a href={account.linkedin} className="text-dark">
                <span className="fs-4 d-flex align-items-center mt-3"><FaLinkedin className="me-1"/>LinkedIn</span>
              </a>
              <a href={account.resume} className="text-dark">
                <span className="fs-4 d-flex align-items-center mt-3"><CgNotes className="me-1"/>Resume</span>
              </a>
            </div>
        </div>
        <div className="col-8 offset-4 d-flex align-items-center mt-5">
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
    </div>
  )

}

export default observer(Sidebar)