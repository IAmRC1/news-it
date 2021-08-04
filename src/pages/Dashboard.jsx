import React from 'react'
import Navbar from '../containers/Navbar'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Header title={'Welcome to Newz It!'} />
      <Main />
      <Footer/>
    </>
  )
}

export default Dashboard
