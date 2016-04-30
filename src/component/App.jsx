import React from 'react';
import { DatePicker } from 'antd';
import FormAnt from './myApp/FormAnt';
import './App.less';
const App = () =>
<div>
	<div style= {{ margin: '0 auto', width: '800px', background: 'red' }}>center</div>
	<DatePicker />
	<FormAnt />
</div>;

export default App;

