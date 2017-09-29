import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'

const works = [
    {
        title: "PulaTech",
        image: "http://placehold.it/1280x960",
        content: "card content lorum ipsum . . ."
    },
    {
        title: "Winsor Learning",
        image: "http://placehold.it/1280x960",
        content: "card content lorum ipsum . . ."
    },
    {
        title: "Winsor Learning eCommerce",
        image: "http://placehold.it/1280x960",
        content: "card content lorum ipsum . . ."
    },
    {
        title: "Sonday System Companion App",
        image: "http://placehold.it/1280x960",
        content: "card content lorum ipsum . . ."
    },
    {
        title: "Rally Roll",
        image: "http://placehold.it/1280x960",
        content: "card content lorum ipsum . . ."
    },
    {
        title: "Cambria DragonVision",
        image: "http://placehold.it/1280x960",
        content: "card content lorum ipsum . . ."
    },
    {
        title: "Cambria Design Palette",
        image: "http://placehold.it/1280x960",
        content: "card content lorum ipsum . . ."
    },
    {
        title: "Davis Family Dairies",
        image: "http://placehold.it/1280x960",
        content: "card content lorum ipsum . . ."
    },
    {
        title: "Terraria Content Mod",
        image: "http://placehold.it/1280x960",
        content: "card content lorum ipsum . . ."
    },
    {
        title: "Don't Starve Together Content Mod",
        image: "http://placehold.it/1280x960",
        content: "card content lorum ipsum . . ."
    }
]

export default class PortfolioSection extends Component {
    render() {
        const portfolioCards = works.map( (work) => {
            const { title, image, content } = work
            return (
                <div className="column is-one-quarter-desktop is-one-third-tablet">
                    <PortfolioCard
                        title={title}
                        image={image}
                        content={content}/>
                </div>
            )
        })

        return (
            <section id="portfolio" className="section">
                <div className="container">
                    <h1 className="title">Portfolio</h1>
                    <hr/>
                    <div className="columns is-multiline">
                        {portfolioCards}
                    </div>
                </div>
            </section>
        )
    }
}