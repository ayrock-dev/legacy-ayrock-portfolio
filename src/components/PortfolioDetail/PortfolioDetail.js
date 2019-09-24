import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Portfolio404 from '../Portfolio404'
import PortfolioAPI from '../PortfolioAPI'
import Pages from './Pages'

export default function PortfolioDetail({ match }) {
    const getPortfolioItem = () => PortfolioAPI.get(match.params.portfolioItemId)

    const getPortfolioPage = () => {
        const { portfolioItemId } = match.params
        const componentKey = 'Page' + portfolioItemId
        return Pages[componentKey]
    }

    const portfolioItem = getPortfolioItem()
    const Page = getPortfolioPage()

    if (!portfolioItem) {
        return <Portfolio404 />
    }

    return (
        <div className="portfolio-detail-component">
            <div className="section">
                <Page {...portfolioItem} />
                <Link className="button" smooth to={`${process.env.PUBLIC_URL}/#portfolio`}>
                    <span className="icon">
                        <i className="fas fa-arrow-left" />
                    </span>
                    <span>Back to All Portfolios</span>
                </Link>
            </div>
        </div>
    )
}
