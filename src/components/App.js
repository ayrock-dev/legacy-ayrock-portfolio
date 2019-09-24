import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePageLayout from './HomePageLayout'
import ContentPageLayout from './ContentPageLayout'

export default function App() {
    return (
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
                <HomePageLayout />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/portfolio`} component={ContentPageLayout} />
        </Switch>
    )
}
