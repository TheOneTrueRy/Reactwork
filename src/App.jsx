import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import Sidebar from "./components/Sidebar.jsx"
import Pop from "./utils/Pop.js";
import { postService } from "./services/PostService.js";
import { FaArrowUp } from "react-icons/fa";
import { adsService } from "./services/AdsService.js";


export function App() {

  async function getPosts(){
    try {
      await postService.getPosts()
    }
    catch (error){
      Pop.error(error);
    }
  }

  async function getAds(){
    try {
      await adsService.getAds()
    }
    catch (error){
      Pop.error(error);
    }
  }

  function returnToTop(){
    document.getElementById('nav').scrollIntoView();
  }

  useEffect(() => {
    getPosts()
    getAds()
  }, [])

  return (
    <div className="App" id="app">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 ps-3">
            <div className="row bg-light elevation-2 pb-4">
              <Sidebar />
            </div>
          </div>
          <div className="col-10">
            <div className="row">
              <div id="nav" className="col-12 g-0">
                <Navbar />
              </div>
              <div className="col-10 g-0 overflow">
                <Outlet />
              </div>
              <div className="col-2 px-3 py-4">
                <div className="row">
                  <div className="col-12">
                    
                  </div>
                  <div className="col-12">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row sticky-bottom pb-2">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary d-flex" onClick={returnToTop}><span className="fs-4 d-flex"><FaArrowUp /></span></button>
          </div>
        </div>
      </div>
    </div>
  )
}
