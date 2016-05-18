import '../common/lib';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router } from 'react-router';
import App from '../component/App';
// import FormAnt from '../component/myApp/FormAnt';
import SelectAnt from '../component/myApp/SelectAnt';
import TableAnt from '../component/myApp/TableAnt';
import UploadAnt from '../component/myApp/UploadAnt';
import DropdownAnt from '../component/myApp/DropdownAnt';
import Validate from '../component/myApp/Validate';

const routes =
[{
	path: '/',
	component: App,
	childRoutes: [
		{ path: 'index', component: SelectAnt },
		{ path: 'about', component: App },
	],
}, {
	path: '/selectAnt',
	component: SelectAnt,
}, {
	path: '/tableAnt',
	component: TableAnt,
}, {
	path: '/uploadAnt',
	component: UploadAnt,
}, {
	path: '/dropdownAnt',
	component: DropdownAnt,
}, {
	path: '/validate',
	component: Validate,
}];

ReactDOM.render(<Router routes= {routes} />, document.getElementById('react-content'));
