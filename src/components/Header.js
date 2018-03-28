import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import {
    BulmaNavbar,
    BulmaNavbarBrand,
    BulmaNavbarBurger,
    BulmaNavbarMenu
} from './bulma/BulmaNavbar'

class Header extends Component {
    getCssClasses = () => {
        const isHome = this.props.location.pathname === '/'
        const brandClass = isHome ? 'brand-logo is-inverted' : 'brand-logo'
        const buttonClass = isHome ? 'button is-primary is-inverted' : 'button is-primary'
        const navbarClass = isHome ? 'navbar is-transparent' : 'navbar is-primary'
        return {
            brandClass,
            buttonClass,
            navbarClass
        }
    }

    render() {
        const resumeLink =
            'https://s3.amazonaws.com/aws-website-ayrock-portfoliohosting-ogzv6/Eric+Lee-Resume-Sept-2017.pdf'
        const { navbarClass, brandClass, buttonClass } = this.getCssClasses()
        return (
            <BulmaNavbar classes={navbarClass}>
                <div className="container">
                    {/* mobile items */}
                    <BulmaNavbarBrand>
                        <Link className="navbar-item" to="/">
                            <div className={brandClass} />
                        </Link>
                        <Link
                            className="navbar-item is-hidden-desktop"
                            to="https://github.com/ayrock-dev"
                        >
                            <span className="icon is-medium">
                                <i className="fab fa-github fa-lg" />
                            </span>
                        </Link>

                        <BulmaNavbarBurger dataTarget="primaryMenu" />
                    </BulmaNavbarBrand>

                    {/* desktop items */}
                    <BulmaNavbarMenu id="primaryMenu">
                        <div className="navbar-start">
                            <Link className="navbar-item" to="#objective">
                                Objective
                            </Link>
                            <Link className="navbar-item" to="#portfolio">
                                Portfolio
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <a className="navbar-item" href="https://github.com/ayrock-dev">
                                <span className="icon is-medium">
                                    <i className="fab fa-github fa-lg" />
                                </span>
                                <span className="is-hidden-desktop">GitHub</span>
                            </a>
                            <span className="navbar-item">
                                <a className={buttonClass} href={resumeLink} target="blank">
                                    <span className="icon">
                                        <i className="fas fa-file-alt" />
                                    </span>
                                    <span>Resume</span>
                                </a>
                            </span>
                        </div>
                    </BulmaNavbarMenu>
                </div>
            </BulmaNavbar>
        )
    }
}

export default withRouter(Header)
