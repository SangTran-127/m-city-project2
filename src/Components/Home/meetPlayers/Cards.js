import React from 'react'
import Animate from 'react-move/Animate'
import {easePolyOut} from 'd3-ease'
import PlayerCard from '../../Utils/playerCard'
//img
import Otamendi from '../../../Resources/images/players/Otamendi.png'
import Sterling from '../../../Resources/images/players/Raheem_Sterling.png'
import Kompany from '../../../Resources/images/players/Vincent_Kompany.png'

let cards = [
    {
        bottom: 90,
        left: 300,
        player: Kompany
    },
    {
        bottom: 60,
        left: 200,
        player: Sterling
    },
    {
        bottom: 30,
        left: 100,
        player: Otamendi
    },
    {
        bottom: 0,
        left: 0,
        player: Sterling
    }
]
function HomeCards(props) {
    const showAnimateCards = () => (
        cards.map((card, index) => (
            <Animate
                key={index}
                show={props.show}
                start = {{
                    left: 0,
                    bottom: 0,
                }}
                enter = {{
                    left: [card.left],
                    bottom: [card.bottom],
                    timing: {
                        delay: 1000,
                        duration: 500,
                        ease: easePolyOut
                    }
                }}
            >
                {({bottom, left}) => (
                    <div
                        style = {{
                            position: 'absolute',
                            left,
                            bottom  
                        }}
                    >
                        <PlayerCard
                            number = "30"
                            firstName="Nicolas"
                            lastName="Otamendi"
                            bck={card.player}
                        />
                    </div>
                )}
            </Animate>
        ))
    )
    return (
        <div>
            {showAnimateCards()}
        </div>
    )
}

export default HomeCards
