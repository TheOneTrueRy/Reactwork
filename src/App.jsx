import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import Sidebar from "./components/Sidebar.jsx"


export function App() {

  return (
    <div className="App" id="app">
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-2 g-0">
            <div className="row h-100">
              <Sidebar />
            </div>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-12 g-0">
                <Navbar />
              </div>
              <div className="col-10 g-0">
                <Outlet />
              </div>
              <div className="col-2 g-0">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
