import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home';
import AboutPage from './about/AboutPage';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about"} component={AboutPage} />
        </Switch>
    </BrowserRouter>
)

export default App