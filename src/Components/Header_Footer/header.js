import React from 'react'
import {AppBar, Toolbar, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
function Header() {
    return( 
        <AppBar
            position = "fixed"
            style = {{
                backgroundColor: '#98c5e9',
                boxShadow: 'none',
                padding: '10px 0',
                borderBottom: '2px solid #00285e'
            }}
        >
            <ToolBar style = {{display: 'flex'}}>
                <div style = {{flexGrow: 1}}>
                    logo
                </div>
                <Link to = "">
                    <Button>The team</Button>
                </Link>
            </ToolBar>
        </AppBar>
    )
}
export default Header;