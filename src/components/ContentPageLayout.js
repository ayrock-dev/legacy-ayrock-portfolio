import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import PortfolioDetail from './PortfolioDetail/PortfolioDetail'

export default function ContentPageLayout() {
    return (
        <div>
            <Header />
            <Switch>
                <Route
                    path={`${process.env.PUBLIC_URL}/portfolio/:portfolioItemId`}
                    component={PortfolioDetail}
                />
            </Switch>
        </div>
    )
}
