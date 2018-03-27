import React from 'react'
import Vimeo from 'react-vimeo'

const videoId = 179254619
const playerOptions = {
    autoplay: false
}

const Page001 = () => (
    <div>
        <h1 className="title">PulaTech</h1>
        <h2 className="subtitle">Redesign of Company Website</h2>
        <hr />
        <div className="content">
            <p>
                At PulaTech, my team rebuilt the PulaTech marketing website. Some bullets from my
                resume define my role on this project:
            </p>
            <ul>
                <li>
                    Led front-end website redesign of pulatech.com. Drove new site design, content,
                    and platform updates to production. Company website design implemented by team
                    on CMS platform.
                </li>
                <li>
                    Created and implemented SEO strategies alongside Google Analytics to increase
                    website traffic 5-fold.
                </li>
            </ul>
            <p>
                Primary development was done myself using an <i>at-the-time</i> new front-end stack:
                code built with Gulp.js task runners, Bower package dependencies, and SASS
            </p>
            <p>
                UX design was done myself - from wireframe to final PhotoShop designs. This included
                all styles, color palettes, layouts, animations, graphics, and typography.
            </p>
            <p>
                The site design has since changed from my time at PulaTech, below is a video of the
                homepage as it was at the time of my team's launch.
            </p>
        </div>

        <Vimeo videoId={videoId} autoplay={true} playerOptions={playerOptions} />
    </div>
)

export default Page001
