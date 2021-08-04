import React, {useState} from 'react'
import wolf from '../assets/images/wolf.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
          <Link to="/" className="navbar-brand p-0 d-flex align-items-center">
            <img alt="wolf" src={wolf} className="img img-fluid" width="40" />
            <span className="ms-3 fw-bold font-logo fs-4">Newz It</span>
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {[
                  { path: "/", label: "Home" }, 
                  { path: "/about", label: "About" }
                ].map((ele, i) => (
                  <li className="nav-item" key={ele.label}>
                    <Link 
                      to={ele.path} 
                      className={`nav-link ${activeIndex === i ? 'active': ''}`}
                    >
                      {ele.label}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
