import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePageLayout from './HomePageLayout'

export default function App() {
    return (
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
                <HomePageLayout />
            </Route>
        </Switch>
    )
}
