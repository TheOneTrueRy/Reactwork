import React from 'react';
import {AppState} from '../AppState.js';
import Login from "./Login.jsx";
import { AuthService } from "../services/AuthService.js";
import { observer } from "mobx-react";

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
        <div className="col-12 d-flex align-items-center justify-content-center top pt-5">
          <img src={account.picture} alt="account photo" height="200" width="200" className="rounded-circle border border-2 border-dark elevation-1" />
        </div>
        <div className="col-12 pt-4 px-4">
          <span className="fs-3">{account.class} {account.graduated ? 'Graduate' : ''}</span>
          <div className="text-center">
          <span className="fs-3 fw-bold">{account.name}</span>
          </div>
        </div>
        <div className="col-12 middle pt-1">
          <div>
            <div className="text-center">
              <a href={account.github} className="text-dark">
                <i className="mdi mdi-github me-2 fs-2"></i>
                <span className="fs-4">GitHub</span>
              </a>
            </div>
            <div className="text-center mt-3">
              <a href={account.linkedin} className="text-dark">
                <i className="mdi mdi-linkedin me-2 fs-2"></i>
                <span className="fs-4">LinkedIn</span>
              </a>
            </div>
            <div className="text-center mt-3">
              <a href={account.resume} className="text-dark">
                <i className="mdi mdi-note-text-outline fs-2"></i>
                <span className="fs-4">Resume</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex align-items-center justify-content-center mt-5">
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