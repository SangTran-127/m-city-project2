import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Header from './Components/Header_Footer/header'
import Footer from './Components/Header_Footer/footer'
import Home from './Components/Home'

function Routes() {
  return (
    <BrowserRouter>
        {/* header */}
        <Header />
        <Switch>
            <Route path="" exact component={Home}/>
        </Switch>
    </BrowserRouter>  
  );
}

export default Routes;
