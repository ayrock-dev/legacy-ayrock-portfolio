import React from 'react'

export default function BulmaNavbarBurger({ dataTarget }) {
    function onClickBurger() {
        let toggle = document.querySelector('.navbar-burger')
        if (toggle) {
            toggle.classList.toggle('is-active')
        }

        const target = dataTarget
        let menu = document.getElementById(target)
        if (menu) {
            menu.classList.toggle('is-active')
        }
    }

    return (
        <span
            className="navbar-burger burger"
            data-target={dataTarget}
            onClick={onClickBurger}
        >
            <span />
            <span />
            <span />
        </span>
    )
}
