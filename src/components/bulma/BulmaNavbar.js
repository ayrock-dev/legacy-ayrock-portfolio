import React from 'react'
import BulmaNavbarBrand from './BulmaNavbarBrand'
import BulmaNavbarMenu from './BulmaNavbarMenu'
import BulmaNavbarBurger from './BulmaNavbarBurger'

function BulmaNavbar({ className, ...props }) {
    return <header className={className}>{props.children}</header>
}

export { BulmaNavbar, BulmaNavbarBrand, BulmaNavbarMenu, BulmaNavbarBurger }

export default BulmaNavbar
