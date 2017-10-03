import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import BulmaBurger from './bulma/BulmaBurger'

class Header extends Component {
  getCssClasses = () => {
    const isHome = this.props.location.pathname === '/'
    const brandClass = isHome ? 'brand-logo is-inverted' : 'brand-logo'
    const buttonClass = isHome ? 'button is-primary is-inverted' : 'button is-primary'
    const navbarClass = isHome ? 'navbar is-transparent' : 'navbar section'
    return {
      brandClass,
      buttonClass,
      navbarClass
    }
  }

  render() {
    const { navbarClass, brandClass, buttonClass } = this.getCssClasses()
    return (
      <header>
        <nav id="primary-nav" className={navbarClass}>
          {/* mobile items */}
          <div className="navbar-brand">
            <Link className="navbar-item" to='/'>
              <div className={brandClass}></div>
            </Link>
          </div>
    
          <BulmaBurger />
    
          {/* desktop items */}
          <div className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item">
                <span className="icon is-medium">
                  <i className="fa fa-github"></i>
                </span>
              </a>
              <span className="navbar-item">
                <a className={buttonClass} href="https://s3.amazonaws.com/aws-website-ayrock-portfoliohosting-ogzv6/Eric+Lee-Resume-Sept-2017.pdf" target="blank">
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

export default withRouter(Header)