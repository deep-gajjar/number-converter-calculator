import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  gotoMain = () => {
    document.getElementById('Main').classList.add('active');
    document.getElementById('all').classList.remove('active');
    document.getElementById('title').innerText = 'Number Converter Calculator';
  }

  gotoAll = () => {
    document.getElementById('Main').classList.remove('active');
    document.getElementById('all').classList.add('active');
    document.getElementById('title').innerHTML = 'Super Powerful Number Converter';
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"
              onClick={this.gotoMain}
            >Number Converter</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" >
                  <Link className="nav-link active" id='Main' aria-current="page" to="/"
                    onClick={this.gotoMain}
                  >Main 4 System</Link>
                </li>
                <li className="nav-item" >
                  <Link className="nav-link" id="all" to="/convert-all"
                    onClick={this.gotoAll}
                  >Convert All</Link>
                </li>


              </ul>
              <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item Active">
                    <span className="nav-link">Created by Deep Gajjar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
