import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route'
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Student from '~/pages/Student/Create';
import StudentList from '~/pages/Student/List';
import Company from '~/pages/Company/Create';
import CompanyList from '~/pages/Company/List';
import Contract from '~/pages/Contract';
import Profile from '~/pages/Profile';

export default function Routes() {

  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate/>
      <Route path="/students" exact component={Student} isPrivate/>
      <Route path="/students/list" exact component={StudentList} isPrivate/>
      <Route path="/companies" exact component={Company} isPrivate/>
      <Route path="/companies/list" exact component={CompanyList} isPrivate/>
      <Route path="/contracts" exact component={Contract} isPrivate/>
      <Route path="/profile" exact component={Profile} isPrivate/>

      <Route path="/" component={() => <h3>404 Not Found</h3>} />
    </Switch>
  );
}
