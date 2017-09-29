import React, { Component } from 'react'
import HomeHero from './HomeHero'
import Footer from './Footer'
import ObjectiveSection from './ObjectiveSection'
import PortfolioSection from './PortfolioSection'

export default class HomepageLayout extends Component {
    render() {
      return (
        <div>
          <HomeHero />
          <ObjectiveSection />
          <PortfolioSection />
          <Footer />
        </div>
      );
    }
  }