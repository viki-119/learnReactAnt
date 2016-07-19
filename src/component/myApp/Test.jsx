import React from 'react';
import {} from 'antd';
function foo(x, y) {
	let data = '';
	if (typeof x === 'number' && typeof y === 'number') {
		data = x + y;
	} else {
		data = 0;
	}
	return data;
}
const Test = React.createClass({
	getInitialState() {
		return {
		};
	},
	render() {
		console.log(foo());
		return (<div>111</div>);
	},
});
export default Test;

