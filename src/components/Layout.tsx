import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import Notes from '../pages/Notes';
import Calendar from '../pages/Calendar';
import './Layout.css';

const Layout: React.FC = () => {
    return (
        <Router>
            <div className="layout">
                <header className="header">
                    <h1>Course Notes AI</h1>
                    <nav className="navigation">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/courses">Courses</a></li>
                            <li><a href="/notes">Notes</a></li>
                            <li><a href="/calendar">Calendar</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="main-content">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/courses" component={Courses} />
                        <Route path="/notes" component={Notes} />
                        <Route path="/calendar" component={Calendar} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default Layout;