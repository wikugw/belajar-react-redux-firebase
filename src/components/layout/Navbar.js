import React from 'react'
import { Link } from 'react-router-dom'
// import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import { connect } from 'react-redux'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">MarioPlan</Link>
        <SignedOutLink />
      </div>
    </nav>
  )
}

const mapStatetoProps = (state) => {
  console.log(state);
  return {

  }
}

export default connect()(Navbar)