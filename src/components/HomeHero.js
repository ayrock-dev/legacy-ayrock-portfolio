import React, { Component } from 'react'
import Header from './Header'

const personas = [
    'a Full Stack Developer',
    'a JavaScript Guru',
    'an Agile Team Member',
    'a Game Modder',
    'an Open Source Contributer'
]

export default class HomeHero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personaIndex: 0,
            personaText: personas[0],
            fading: false
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.changePersona(), 3000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    changePersona() {
        this.setState({ fading: true })
        const next = this.state.personaIndex + 1
        const i = next < personas.length ? next : 0
        setTimeout(_ => {
            this.setState({
                personaIndex: i,
                personaText: personas[i],
                fading: false
            })
        }, 500)
    }

    render() {
        const { fading, personaText } = this.state

        return (
            <section className="hero is-primary is-bold is-fullheight">
                <div className="hero-head">
                    <Header />
                </div>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Eric Lee is&nbsp;
                            <span className={`${fading ? 'fades fading' : 'fades'}`}>
                                {personaText}
                            </span>
                        </h1>
                    </div>
                </div>
            </section>
        )
    }
}
