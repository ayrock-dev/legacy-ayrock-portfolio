import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './components/serviceWorker'
import App from './components/App'
import './styles/index.scss'

function hashLinkScroll() {
    const { hash } = window.location
    if (hash !== '') {
        setTimeout(() => {
            const id = hash.replace('#', '')
            const element = document.getElementById(id)
            if (element) element.scrollIntoView()
        }, 0)
    }
}

render(
    <BrowserRouter onUpdate={hashLinkScroll}>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
