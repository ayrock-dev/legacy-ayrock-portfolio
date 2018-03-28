import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import PortfolioDetail from './PortfolioDetail/PortfolioDetail'

const ContentPageLayout = () => (
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

export default ContentPageLayout
