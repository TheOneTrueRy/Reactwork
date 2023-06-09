import { observer } from "mobx-react-lite"
import React from "react"
import { Link } from "react-router-dom"
import { AppState } from "../AppState.js"
import { AuthService } from "../services/AuthService.js"

function Login() {

  function login() {
    AuthService.loginWithRedirect()
  }

  function logout() {
    localStorage.removeItem('user-token')
    AuthService.logout({})
  }

  const notAuthenticated = (
    <button className="btn bg-primary bg-gradient selectable text-light text-uppercase my-2 my-lg-0 border-dark" onClick={login}>Login</button>
  )

  const authenticated = (
    <div className="my-2 my-lg-0">
      <img src={AppState.account?.picture || AppState.user?.picture} alt="account photo" className="rounded-circle selectable no-select pfp border border-dark elevation-1" data-bs-toggle="dropdown"
        aria-expanded="false" />

      <div className="dropdown-menu dropdown-menu-lg-end dropdown-menu-start p-0" aria-labelledby="authDropdown">
        <div className="list-group">
          <Link to={'Account'}>
            <div className="list-group-item dropdown-item list-group-item-action">
              Manage Account
            </div>
          </Link>
          <div className="list-group-item dropdown-item list-group-item-action text-danger selectable" onClick={logout}>
            <i className="mdi mdi-logout"></i>
            logout
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <span className="navbar-text">
        {!AppState.account?.id ? notAuthenticated : authenticated}
      </span>
    </>
  )
}

export default observer(Login)