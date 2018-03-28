import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import BulmaBurger from './bulma/BulmaBurger'

export default class PrimaryMenu extends Component {
    render() {
        return (
            <div className="nav">
                <div className="container">
                    <BulmaBurger />
                    <div id="primaryNav" className="nav-right nav-menu">
                        <Link to={`${process.env.PUBLIC_URL}`} className="nav-item">
                            Home
                        </Link>
                        <a className="nav-item" href="#objective">
                            Objective
                        </a>
                        <a className="nav-item" href="#portfolio">
                            Portfolio
                        </a>
                        <span className="nav-item">
                            <a className="button is-primary is-inverted">
                                <span className="icon">
                                    <i className="fa fa-file-text" />
                                </span>
                                <span>Resume</span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
