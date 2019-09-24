import React from 'react'
import HomeHero from './HomeHero'
import Footer from './Footer'
import ObjectiveSection from './ObjectiveSection'
import PortfolioSection from './PortfolioSection'

export default function HomePageLayout() {
    return (
    <div>
        <HomeHero />
        <ObjectiveSection />
        <PortfolioSection />
        <Footer />
    </div>
    )
}
