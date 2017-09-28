import React, { Component } from 'react'
import HomeHero from './HomeHero'
import Footer from './Footer'

export default class HomepageLayout extends Component {
    render() {
      return (
        <div>
          <HomeHero />
          <section id="objective" className="section">
            <div className="container">
              <h1 className="title">Objective</h1>
              <h2 className="subtitle">
                My objective is to collect all <strong>151</strong> Pokemon!
              </h2>
            </div>
          </section>
          <section id="portfolio" className="section">
            <div className="container">
              <h1 className="title">Portfolio</h1>
              <h2 className="subtitle">
                Here are some projects I have completed.
              </h2>
            </div>
          </section>
          <Footer />
        </div>
      );
    }
  }