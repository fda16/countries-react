import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './style/main.scss';

export default function App() {
    const HomePage = React.lazy(() => import('./pages/home-page/home-page'));
    const LoginPage = React.lazy(() => import('./pages/login-page/login-page'));
    const RegisterPage = React.lazy(() => import('./pages/register-page/register-page'));
    
    return (
        <React.Suspense fallback={<div>Загрузка...</div>}>
            <Router>
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={() => <HomePage />} />
                    
                    <Route
                        exact
                        path='/login'
                        render={() => <LoginPage />} />

                    <Route
                        exact
                        path='/register'
                        render={() => <RegisterPage />} />

                </Switch>
            </Router>
        </React.Suspense>
    );
}