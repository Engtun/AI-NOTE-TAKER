import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Notes from './pages/Notes';
import Calendar from './pages/Calendar';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/notes" component={Notes} />
          <Route path="/calendar" component={Calendar} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;