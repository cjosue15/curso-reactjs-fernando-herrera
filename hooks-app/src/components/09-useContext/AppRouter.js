import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';
import { NotFound } from './NotFound';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/about' component={AboutScreen} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};
