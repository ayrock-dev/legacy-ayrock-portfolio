import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePageLayout from './HomePageLayout'
import ContentPageLayout from './ContentPageLayout'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'>
          <HomePageLayout match={this.props.match} />
        </Route>
        <Route path='/portfolio' component={ContentPageLayout}/>
      </Switch>
    )
  }
}