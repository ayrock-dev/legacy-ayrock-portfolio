import React from 'react'
import BulmaNavbarBrand from './BulmaNavbarBrand'
import BulmaNavbarMenu from './BulmaNavbarMenu'
import BulmaNavbarBurger from './BulmaNavbarBurger'

const BulmaNavbar = ({ classes, ...props }) => {
    return <header className={classes}>{props.children}</header>
}

export { BulmaNavbar, BulmaNavbarBrand, BulmaNavbarMenu, BulmaNavbarBurger }

export default BulmaNavbar
