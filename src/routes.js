import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Header from './Components/Header_Footer/header'
import Footer from './Components/Header_Footer/footer'
import Home from './Components/Home'
import SignIn from './Components/Signin/index'

function Routes({user}) {
  return (
    <BrowserRouter>
        <Header user={user}/>
        <Switch>
            <Route path="/sign_in" exact component={SignIn}/>
            <Route path="/" exact component={Home}/>
        </Switch>
        <Footer />   
    </BrowserRouter>  
    
  );
}

export default Routes;
