import React from 'react'
import { withRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import {
    BulmaNavbar,
    BulmaNavbarBrand,
    BulmaNavbarBurger,
    BulmaNavbarMenu
} from './bulma/BulmaNavbar'
import Brand from './Brand';

function Header({ location }) {
    const isHome = location.pathname === '/'
    const buttonClass = isHome ? 'button is-primary is-inverted' : 'button is-primary'
    const navbarClass = isHome ? 'navbar is-transparent' : 'navbar is-primary'

    const resumeLink = 'https://aws-website-ayrock-portfoliohosting-ogzv6.s3.amazonaws.com/EricLee-Resume-Sept-2019.pdf'

    return (
        <BulmaNavbar className={navbarClass}>
            <div className="container">
                {/* mobile items */}
                <BulmaNavbarBrand>
                    <Link className="navbar-item" to="/">
                        <Brand className="title" />
                    </Link>
                    <a
                        className="navbar-item is-hidden-desktop"
                        href="https://github.com/ayrock-dev"
                        target="blank"
                    >
                        <span className="icon is-medium">
                            <i className="fab fa-github fa-lg" />
                        </span>
                    </a>
                    <a
                        className="navbar-item is-hidden-desktop"
                        href="https://www.linkedin.com/eric-lee-dev"
                        target="blank"
                    >
                        <span className="icon is-medium">
                            <i className="fab fa-linkedin-in fa-lg" />
                        </span>
                    </a>

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
                        <a
                            className="navbar-item"
                            href="https://github.com/ayrock-dev"
                            target="blank"
                        >
                            <span className="icon is-medium">
                                <i className="fab fa-github fa-lg" />
                            </span>
                            <span className="is-hidden-desktop">GitHub</span>
                        </a>
                        <a
                            className="navbar-item"
                            href="https://www.linkedin.com/eric-lee-dev"
                            target="blank"
                        >
                            <span className="icon is-medium">
                                <i className="fab fa-linkedin-in fa-lg" />
                            </span>
                            <span className="is-hidden-desktop">LinkedIn</span>
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

export default withRouter(Header)
