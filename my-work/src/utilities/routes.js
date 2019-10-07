import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';

const MainRouter = (route_props) => (
    <Router>
        <Route exact path='/' render={(props) => <HomePage {...props} {...route_props} />} />
    </Router>
);

export default MainRouter;
