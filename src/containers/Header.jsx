import React from 'react'
import moment from 'moment'

const Header = ({ title }) => {
  return (
    <header className="py-5 border-bottom mb-4" style={{ backgroundImage: "url(" + "http://cdn.backgroundhost.com/backgrounds/subtlepatterns/corrugation.png" + ")"}}>
      <div className="container">
          <div className="text-center my-5">
              <h1 className="fw-bolder">{title}</h1>
              <p className="lead mb-0">Leading news aggregator as on <strong>{moment().format('Do MMMM YYYY')}</strong></p>
          </div>
      </div>
    </header>
  )
}

export default Header
