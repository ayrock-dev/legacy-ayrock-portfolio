import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BulmaBurger from './bulma/BulmaBurger'

export default class Header extends Component {

  render() {
    return (
      <header>
        <nav id="primary-nav" className="navbar is-transparent">
          {/* mobile items */}
          <div className="navbar-brand">
            <Link className="navbar-item" to='/'>
              <div className='brand-logo'></div>
            </Link>
          </div>
    
          <BulmaBurger />
    
          {/* desktop items */}
          <div className="navbar-menu">
            <div className="navbar-end">
              <Link className="navbar-item" to='/#objective'>Objective</Link>
              <Link className="navbar-item" to='/#portfolio'>Portfolio</Link>
              <span className="navbar-item">
                <a className="button is-primary is-inverted">
                  <span className="icon">
                    <i className="fa fa-file-text"></i>
                  </span>
                  <span>Resume</span>
                </a>
              </span>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}