import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLink /> : <SignedOutLink />
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">MarioPlan</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStatetoProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStatetoProps)(Navbar)