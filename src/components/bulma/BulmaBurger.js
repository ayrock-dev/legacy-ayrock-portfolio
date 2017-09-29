import React, { Component } from 'react'

export default class BulmaBurger extends Component {
    onClickBurger() {
        let toggle = document.querySelector(".nav-toggle")
        const target = toggle.dataset.target;
        let menu = document.getElementById(target)
        toggle.classList.toggle("is-active")
        menu.classList.toggle("is-active")
    } 

    render() {
        return (
        <span className="nav-toggle" data-target="primary-nav" onClick={this.onClickBurger}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        );
    }
}