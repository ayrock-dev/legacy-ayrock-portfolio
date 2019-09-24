import React, { useState, useEffect } from 'react'
import Header from './Header'

const personas = [
    'a Full Stack Developer',
    'a JavaScript Guru',
    'an Agile Team Member',
    'a Mentor to Junior Developers',
    'an Open Source Contributer'
]

export default function HomeHero() {
    const [personaIndex, setPersonaIndex] = useState(0)
    const [personaText, setPersonaText] = useState(personas[personaIndex]);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        function changePersona() {
            setFading(true);
            const next = personaIndex + 1
            const i = next < personas.length ? next : 0
            setTimeout(() => {
                setPersonaIndex(i)
                setPersonaText(personas[i])
                setFading(false)
            }, 500)
        }

        const interval = setInterval(changePersona, 3000)
        return () => clearInterval(interval)
    }, [])

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
