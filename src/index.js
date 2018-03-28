import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './components/registerServiceWorker'
import App from './components/App'
import './styles/index.css'

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

registerServiceWorker()
