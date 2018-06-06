import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../Home/Home';
import Search from './../Search/Search';

import './Main.css';

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/search' component={Search}/>
            </Switch>
        </main>
    );
}

export default Main;