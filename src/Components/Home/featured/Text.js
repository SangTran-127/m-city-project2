import React from 'react'
import {Animate} from 'react-move'
import {easePolyOut} from 'd3-ease'
import FeaturedPlayer from '../../../Resources/images/featured_player.png'
const Text = () => {
    const animateNumber = () => (
        <Animate
            show={true}
            start = {{
                opacity: 0,
                rotate: 0,
            }}
            enter = {{
                opacity: [1],
                rotate: [360],
                timing: {
                    duration: 1000,
                    ease: easePolyOut
                }
            }}
        >
            {({opacity, rotate}) => (
                <div className="featured_number"
                    style = {{
                        opacity,
                        transform: `translate(260px,30px) rotateY(${rotate}deg)`,
                    }}
                >
                    12
                </div>
            )}
        </Animate>
    )
    const animateFirstText = () => (
        <Animate
            show = {true}
            start = {{
                opacity: 0,
                x: 503,
                y: 320,
            }}
            enter = {{
                opacity: [1],
                x: [273],
                y: [320],
                timing: {
                    duration: 500,
                    ease: easePolyOut
                }
            }}
        >
            {({opacity, x, y}) => (
                <div className="featured_first"
                    style={{
                        opacity,
                        transform: `translate(${x}px, ${y}px)`
                    }}
                >
                    league
                </div>
            )}   
        </Animate>
    )
    const animateSecondText = () => (
        <Animate
            show = {true}
            start = {{
                opacity: 0,
                x: 503,
                y: 450,
            }}
            enter = {{
                opacity: [1],
                x: [273],
                y: [450],
                timing: {
                    duration: 500,
                    delay: 300,
                    ease: easePolyOut
                }
            }}
        >
            {({opacity, x, y}) => (
                <div className="featured_first"
                    style={{
                        opacity,
                        transform: `translate(${x}px, ${y}px)`
                    }}
                >
                    championships
                </div>
            )}   
        </Animate>
    )
    const animatePlayer = () => (
        <Animate
            show = {true}
            start = {{
                opacity: 0,
            }}
            enter = {{
                opacity: [1],
                timing: {
                    duration: 800,
                    delay: 300,
                    ease: easePolyOut
                }
            }}
        >
            {({opacity}) => (
                <div className="featured_player"
                    style = {{
                        opacity,
                        background: `url(${FeaturedPlayer}) no-repeat`,
                        transform: `translate(630px, 80px)`
                    }}
                >
            
                </div>
            )}
        </Animate>
    )
    return (
        <div className="featured_text">
            {animatePlayer()}
            {animateNumber()}
            {animateFirstText()}
            {animateSecondText()}
        </div>
    )
}

export default Text
