import '../common/lib';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router } from 'react-router';
import App from '../component/App';
// import FormAnt from '../component/myApp/FormAnt';
import SelectAnt from '../component/myApp/SelectAnt';

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'index', component: SelectAnt },
    { path: 'about', component: App },
  ],
};

ReactDOM.render(<Router routes= {routes} />, document.getElementById('react-content'));
