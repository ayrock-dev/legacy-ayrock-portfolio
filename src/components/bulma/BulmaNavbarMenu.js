import React from 'react'

export default function BulmaNavbarMenu({ id, ...props }) {
    return <div id={id} className="navbar-menu">{props.children}</div>
}
