import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

function Routes() {
  return (
    <BrowserRouter>
        {/* header */}
        <Header />
        <Switch>
            <Route path="" exact component=""/>
        </Switch>
    </BrowserRouter>  
  );
}

export default Routes;
