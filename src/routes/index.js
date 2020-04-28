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
import Contract from '~/pages/Contract/Create';
import ContractList from '~/pages/Contract/List';
import Scan from '~/pages/Contract/Scan';
import ContractDetails from '~/pages/Contract/Details';
import Profile from '~/pages/Profile';
import Calendar from '~/pages/Calendar/List';
import CalendarEdit from '~/pages/Calendar/Edit'
import pki from '~/pages/pki/pki'

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
      <Route path="/contracts/list" exact component={ContractList} isPrivate/>
      <Route path="/contracts/details/:id" exact component={ContractDetails} isPrivate/>
      <Route path="/profile" exact component={Profile} isPrivate/>
      <Route path="/calendar" exact component={Calendar} isPrivate/>
      <Route path="/calendar/edit" exact component={CalendarEdit} isPrivate/>
      <Route path="/scan" exact component={Scan} />
      <Route path="/.well-known/pki-validation/starfield.html" exact component={pki} />

      <Route path="/" component={() => <h3>404 Not Found</h3>} />
    </Switch>
  );
}
