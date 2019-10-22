import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function PortfolioCard({
    id,
    title,
    thumbUrl,
    description
}) {
    const getRelativeThumbUrl = thumbUrl => {
        if ((thumbUrl || '').indexOf('http') >= 0) {
            return thumbUrl
        } else {
            return `${process.env.PUBLIC_URL}/${thumbUrl}`
        }
    }

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={getRelativeThumbUrl(thumbUrl)} alt="" />
                </figure>
            </div>
            <header className="card-header">
                <p className="card-header-title">{title}</p>
            </header>
            <div className="card-content">
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    )
}

PortfolioCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.any
}
