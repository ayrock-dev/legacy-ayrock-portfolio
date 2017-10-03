import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import PortfolioDetail from './PortfolioDetail/PortfolioDetail'

const ContentPageLayout = () => (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/portfolio/:portfolioItemId' component={PortfolioDetail}/>
      </Switch>
    </div>
  )

export default ContentPageLayout