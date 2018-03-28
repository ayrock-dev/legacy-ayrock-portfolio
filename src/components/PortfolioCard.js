import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class PortfolioCard extends Component {
    getReadMoreLink = id => `${process.env.PUBLIC_URL}/portfolio/${id}`

    getRelativeThumbUrl = thumbUrl => {
        if ((thumbUrl || '').indexOf('http') >= 0) {
            return thumbUrl
        } else {
            return `${process.env.PUBLIC_URL}/${thumbUrl}`
        }
    }

    render() {
        const { id, title, thumbUrl, description, hasContent, techIcons } = this.props

        const readMoreLink = this.getReadMoreLink(id)

        let iconElements

        if (techIcons && techIcons.length) {
            iconElements = techIcons.map((icon, index) => {
                const iconKey = 'icon-' + id + '-' + index
                const iconClassName = 'is-large ' + icon.cssClass
                return <i className={iconClassName} key={iconKey} title={icon.tooltip} />
            })
        }

        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <img src={this.getRelativeThumbUrl(thumbUrl)} alt="" />
                    </figure>
                </div>
                <header className="card-header">
                    <p className="card-header-title">{title}</p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {description}
                        {techIcons && <p className="tech-icons has-text-right">{iconElements}</p>}
                    </div>
                </div>
                {hasContent && (
                    <footer className="card-footer">
                        <Link to={readMoreLink} className="card-footer-item">
                            Read More
                        </Link>
                    </footer>
                )}
            </div>
        )
    }
}

PortfolioCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.any
}
