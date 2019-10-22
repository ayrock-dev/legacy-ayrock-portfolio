import React from 'react'
import PortfolioCard from './PortfolioCard'
import PortfolioAPI from './PortfolioAPI'

export default function PortfolioSection() {
    const getPortfolioItems = () => PortfolioAPI.all()

    const portfolioCards = getPortfolioItems().map((work) => {
        return (
            <div className="column is-one-quarter-desktop is-one-third-tablet" key={work.id}>
                <PortfolioCard {...work} />
            </div>
        )
    })

    return (
        <section id="portfolio" className="section">
            <div className="container">
                <h1 className="title">Portfolio</h1>
                <div className="columns is-multiline">
                    {portfolioCards}
                </div>
            </div>
        </section>
    )
}