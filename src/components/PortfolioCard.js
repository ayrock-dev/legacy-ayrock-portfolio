import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PortfolioCard extends Component {
    render() {
        const { title, image, content } = this.props

        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={image} alt="" />
                    </figure>
                </div>
                <header className="card-header">
                    <p className="card-header-title">
                        {title}
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        {content}
                    </div>
                </div>
            </div>
        )
    }
}

PortfolioCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.any
}