import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Portfolio404 from '../Portfolio404'
import PortfolioAPI from '../PortfolioAPI'
import Pages from './Pages'

export default class PortfolioDetail extends Component {
    getPortfolioItem = () => PortfolioAPI.get(this.props.match.params.portfolioItemId)

    getPortfolioPage = () => {
        const { portfolioItemId } = this.props.match.params
        const componentKey = 'Page' + portfolioItemId
        return Pages[componentKey]
    }

    render() {
        const portfolioItem = this.getPortfolioItem()
        const Page = this.getPortfolioPage()

        if (!portfolioItem) {
            return <Portfolio404 />
        }

        return (
            <div className="portfolio-detail-component">
                <div className="section">
                    <Page {...portfolioItem} />
                    <Link className="button" smooth to="/#portfolio">
                        <span className="icon">
                            <i className="fas fa-arrow-left" />
                        </span>
                        <span>Back to All Portfolios</span>
                    </Link>
                </div>
            </div>
        )
    }
}
