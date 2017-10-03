import React, { Component } from 'react'
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
            return (
                <Portfolio404 />
            )
        }

        return (
            <Page {...portfolioItem} />
        );
    }
}