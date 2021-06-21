import React, {useState} from 'react'
import {Animate} from 'react-move'
import {easePolyOut} from 'd3-ease'
const Test = () => {
    const [show, setShow] = useState(true)
    const [bck, setBck] = useState('#ffffff')
    return (
        <div>
            <Animate    
                show={show}
                start={{
                    backgroundColor: bck,
                    width: 500,
                    height: 500,
                    opacity: 0
                }}
                enter={{
                    width: [100],
                    height: [100],
                    opacity: [1],
                    timing: {
                        duration: 1000,
                        delay: 1000,
                        ease: easePolyOut
                    }
                }}
            >
                { ({width, height, opacity, backgroundColor}) => (
                    <div
                        style={{
                            width, 
                            height, 
                            opacity, 
                            backgroundColor
                        }}
                    >
                        hello
                    </div>
                )} 
                {/* phải là hàm trả về component */}
            </Animate>
        </div>
    )
}

export default Test
