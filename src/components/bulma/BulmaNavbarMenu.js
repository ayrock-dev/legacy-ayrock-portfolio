import React from 'react'

const BulmaNavbarMenu = ({ id, ...props }) => {
    return (
        <div id={id} className="navbar-menu">
            {props.children}
        </div>
    )
}

export default BulmaNavbarMenu
