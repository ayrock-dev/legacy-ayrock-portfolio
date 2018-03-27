import React, { Component } from 'react'

export default class BulmaNavbarBurger extends Component {
    onClickBurger() {
        let toggle = document.querySelector('.navbar-burger')
        if (toggle) {
            toggle.classList.toggle('is-active')
        }

        const target = this.props.dataTarget
        let menu = document.getElementById(target)
        if (menu) {
            menu.classList.toggle('is-active')
        }
    }

    render() {
        return (
            <span
                className="navbar-burger burger"
                data-target={this.props.dataTarget}
                onClick={this.onClickBurger.bind(this)}
            >
                <span />
                <span />
                <span />
            </span>
        )
    }
}
