import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import Sidebar from "./components/Sidebar.jsx"
import Pop from "./utils/Pop.js";
import { postService } from "./services/PostService.js";
import {FaArrowUp} from "react-icons/fa6";


export function App() {

  async function getPosts(){
    try {
      await postService.getPosts()
    }
    catch (error){
      Pop.error(error);
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="App" id="app">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 ps-3">
            <div className="row vh-70 bg-light elevation-2 pb-4">
              <Sidebar />
            </div>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-12 g-0">
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
            <button className="btn btn-secondary"><FaArrowUp /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
