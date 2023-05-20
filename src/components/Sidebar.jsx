import React from 'react';
import {AppState} from '../AppState.js';
import Login from "./Login.jsx";

export default function Sidebar() {

  const account = AppState.account

  return (
    <div className="Sidebar">
    {account &&  
      <>
        <div className="col-12 d-flex align-items-center justify-content-center top pt-2">
          <img src={account.picture} alt="account photo" height="150" width="150" className="rounded-circle border border-2 border-dark elevation-1" />
        </div>
        <div className="col-12 text-center">
          <span className="fs-3">{account.name}</span>
        </div>
        <div className="col-12 middle pt-1">
          <div>
            <div className="text-center d-flex flex-column">
              <a href={account.github}>
                <i className="mdi mdi-github me-2 fs-2"></i>
                <span className="on-hover fs-4">GitHub</span>
              </a>
            </div>
            <div className="text-center d-flex flex-column mt-3">
              <a href={account.linkedin}>
                <i className="mdi mdi-linkedin me-2 fs-2"></i>
                <span className="on-hover fs-4">LinkedIn</span>
              </a>
            </div>
            <div className="text-center d-flex flex-column mt-3">
              <a href={account.resume}>
                <i className="mdi mdi-note-text-outline fs-2"></i>
                <span className="on-hover fs-4">Resume</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex align-items-center justify-content-center">
          <Login/>
        </div>
      </>}
      {!account && 
      <>
        <div className="col-12 d-flex align-items-center justify-content-center pt-5">
          <Login />
        </div>
      </>}
    </div>
  )

}