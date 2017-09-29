import React, { Component } from 'react'
import BulmaBurger from './bulma/BulmaBurger'

const personas = [
  'a JavaScript Guru',
  'a Front End Developer',
  'a Game Modder',
  'an Open Source Contributer',
  'a Full Stack Enthusiast',
  'an Agile Team Member'
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
    this.timerID = setInterval(
      () => this.changePersona(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changePersona() {
    this.setState({ fading: true });
    const next = this.state.personaIndex + 1
    const i = (next < personas.length) ? next : 0
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
      <section id="top" className="hero is-primary is-fullheight">
        {/* Hero header: will stick at the top */}
        <div id="top" className="hero-head">
          <header className="nav">
            <div className="container">
              <BulmaBurger />
              <div id="primary-nav" className="nav-right nav-menu">
                <a className="nav-item" href="#top">
                  Home
                </a>
                <a className="nav-item" href="#objective">
                  Objective
                </a>
                <a className="nav-item" href="#portfolio">
                  Portfolio
                </a>
                <span className="nav-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-file-text"></i>
                    </span>
                    <span>Resume</span>
                  </a>
                </span>
              </div>
            </div>
          </header>
        </div>

        {/* Hero content: will be in the middle */}
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Eric Lee is&nbsp;
              <span className={`${fading ? 'fades fading' : 'fades'}`}>{personaText}</span>
            </h1>
          </div>
        </div>
      </section>
    )
  }
}