import React from "react";
import { Link } from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BindEditable } from "../utils/FormHandler.js";
import Pop from "../utils/Pop.js";
import { postService } from "../services/PostService.js";
import { profileService } from "../services/ProfileService.js";
import { logger } from "../utils/Logger.js";

export function Navbar() {
  let editable = { query: '' }
  let bindEditable = BindEditable(editable)

  async function search() {
    try {
      logger.log(editable.query, 'Query')
      window.event.preventDefault
      await postService.searchPosts(editable)
      await profileService.searchProfiles(editable)
      editable = { query: '' }
    }
    catch (error) {
      Pop.error(error.message);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navbar px-3 justify-content-between">
      <Link className="navbar-brand d-flex text-light" to={''} title="Return to Homepage">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img alt="logo" src={`https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png`} height="45" />
        </div>
        <div className="ps-1">
          <span className="fs-1">
            Reactwork
          </span>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <form onSubmit={search} key={editable.id}>
        <div className="input-group">
          <input type="text" className="form-control bg-light" placeholder="Search..." defaultValue={editable.query} onChange={bindEditable} id="query" name="query" />
          <span className="input-group-text bg-light selectable" onClick={search}><RxMagnifyingGlass className="fs-5" /></span>
        </div>
      </form>
      {/* <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto">
          <li>
            <Link to={'About'} className="btn text-success lighten-30 selectable text-uppercase">
              About
            </Link>
          </li>
        </ul>
      </div > */}
    </nav >
  )
}