import React from 'react';
// import { DatePicker } from 'antd';
// <DatePicker />

import FormAnt from './myApp/FormAnt';
import './App.less';
const App = () =>
<div>
	<div style= {{ margin: '0 auto 10px', width: '800px', height: '30px', background: 'red' }}>
		<span style= {{ verticalAlign: 'middle', fontSize: '20px' }}>Start</span>
	</div>
	<FormAnt />
</div>;

export default App;

