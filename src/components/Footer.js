import React from 'react'
import classNames from 'classnames'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={classNames('footer', styles.footer)}>
            <div className="container">
                <div className="content">
                    <p>
                        <a href="https://github.com/ayrock-dev/ayrock-portfolio">
                            <span className="icon is-medium">
                                <i className="fab fa-github" />
                            </span>
                            <span>This portfolio</span>
                        </a>
                        <span> was coded myself using </span>
                        <a
                            className="icon is-medium no-color-change"
                            href="https://facebook.github.io/react/"
                            title="React"
                        >
                            <i className="devicon-react-original colored" />
                        </a>
                        <span>, </span>
                        <a
                            className="icon is-medium no-color-change"
                            href="https://github.com/sass/sass"
                            title="Sass"
                        >
                            <i className="devicon-sass-original colored" />
                        </a>
                        <span>, and</span>
                        <a
                            className="icon is-medium no-color-change"
                            href="https://babeljs.io/"
                            title="Babel"
                        >
                            <i className="devicon-babel-plain" />
                        </a>
                        <span>.</span>
                    </p>
                    <p>
                        The source code is licensed&nbsp;
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.<br />
                        The website content is licensed&nbsp;
                        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                            CC BY NC SA 4.0
                        </a>.
                    </p>
                </div>
            </div>
        </footer>
    )
}
