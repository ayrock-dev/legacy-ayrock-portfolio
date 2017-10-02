import React, { Component } from 'react'
import Portfolio404 from './Portfolio404'
import PortfolioAPI from './PortfolioAPI'

export default class PortfolioDetail extends Component {
    getPortfolioItem = () => PortfolioAPI.get(this.props.match.params.portfolioItemId)

    render() {
        const portfolioItem = this.getPortfolioItem()

        if (!portfolioItem) {
            return (
                <Portfolio404 />
            )
        }

        return (
            <div>
                <h1 className="title">{portfolioItem.title}</h1>
                <p>{portfolioItem.content}</p>
            </div>
        );
    }
}