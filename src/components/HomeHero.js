import React, { Component } from 'react'

export default class HomeHero extends Component {
    render() {
      return (
        <section className="hero is-primary is-fullheight">
          {/* Hero header: will stick at the top */}
          <div id="top" className="hero-head">
            <header className="nav">
              <div className="container">
                <span className="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <div className="nav-right nav-menu">
                  <a className="nav-item is-active" href="#top">
                    Home
                  </a>
                  <a className="nav-item" href="#objective">
                    Objective
                  </a>
                  <a className="nav-item">
                    Portfolio
                  </a>
                  <span className="nav-item">
                    <a className="button is-primary is-inverted">
                      <span className="icon">
                        <i className="fa fa-file-text"></i>
                      </span>
                      <span>Resume</span>
                    </a>
                  </span>
                </div>
              </div>
            </header>
          </div>

          {/* Hero content: will be in the middle */}
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <span>Eric Lee</span> is a JavaScript Guru
              </h1>
            </div>
          </div>
        </section>
      )
    }
}