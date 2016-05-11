import { Table, Icon, Select } from 'antd';
import React from 'react';

const Option = Select.Option;
const TableAnt = React.createClass({
	getInitialState() {
		return {
			data: [
{ key: 1, name: '胡彦斌', age: 32, address: '西湖区湖底公园1号', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。' },
{ key: 2, name: '吴彦祖', age: 42, address: '西湖区湖底公园2号', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。' },
{ key: 3, name: '李大嘴', age: 32, address: '西湖区湖底公园3号', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。' },
			],
		};
	},

	render() {
		const columns = [{
			title: '姓名',
			dataIndex: 'name',
			key: 'name',
			render(text) {
				return <a href="#">{text}</a>;
			},
		}, {
			title: '年龄',
			dataIndex: 'age',
			key: 'age',
		}, {
			title: '住址',
			dataIndex: 'address',
			key: 'address',
			render(text, record, index) {
				return (
					<Select style={{ width: '100px' }} defaultValue={ index }>
						<Option value={text}>{record.address}</Option>
					</Select>
				);
			},
		}, {
			title: '操作',
			key: 'operation',
			render(text, record) {
				return (
					<span>
						<a href="#">操作一{record.name}</a>
						<span className="ant-divider"></span>
						<a href="#">操作二</a>
						<span className="ant-divider"></span>
						<a href="#" className="ant-dropdown-link">
							更多 <Icon type="down" />
						</a>
					</span>
				);
			},
		}];
		return <Table columns={columns} dataSource={this.state.data} />;
	},
});

export default TableAnt;
