import React from 'react'
import {Tag} from '../../Utils/tool'
import Blocks from './Blocks'
function MatchesHome() {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    bck="#0e1731"
                    fontSize="50px"
                    color="#ffffff"
                    add={{
                        // nếu muốn overide hoặc thêm
                    }}
                >   
                
                    Matches
                </Tag>
                <Blocks/>
                <Tag
                    fontSize="22px"
                    color="#0e1731"
                    link={true}
                    linkTo='/the_team'
                >   
                    see more matches
                    
                </Tag>
            </div>
        </div>
    )
}

export default MatchesHome
