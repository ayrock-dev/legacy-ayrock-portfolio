import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import PortfolioDetail from './PortfolioDetail'

const ContentPageLayout = () => (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route path='/portfolio/:portfolioItemId' component={PortfolioDetail}/>
        </Switch>
      </div>
    </div>
  )

export default ContentPageLayout