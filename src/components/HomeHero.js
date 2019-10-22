import React, { useState } from 'react'
import classNames from 'classnames'
import useInterval from 'use-interval'
import Header from './Header'
import styles from './HomeHero.module.scss'
import Brand from './Brand';

const personas = [
    'a Full Stack Developer',
    'a JavaScript Guru',
    'an Agile Team Member',
    'a Mentor to Junior Developers',
    'an Open Source Contributer'
]

export default function HomeHero() {
    const [personaIndex, setPersonaIndex] = useState(0)
    const [personaText, setPersonaText] = useState(personas[personaIndex])
    const [fading, setFading] = useState(false)

    useInterval(() => {
        setFading(true)
        const next = personaIndex + 1
        const wrapped = (next + personas.length) % personas.length
        setTimeout(() => {
            setPersonaIndex(wrapped)
            setPersonaText(personas[wrapped])
            setFading(false)
        }, 500)
    }, 3000)

    return (
        <section className={classNames('hero is-primary is-bold is-fullheight', styles.hero)}>
            <div className="hero-head">
                <Header />
            </div>
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        <span>
                            <Brand /> is&nbsp;
                        </span>
                        <span
                            className={classNames({
                                'fades fading': fading,
                                'fades': !fading
                            })}
                        >
                            {personaText}
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    )
}
