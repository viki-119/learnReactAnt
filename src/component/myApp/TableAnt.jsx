import { Table, Icon, Select, Form } from 'antd';
import React, { PropTypes } from 'react';
import { optionObjData } from '../Data/OptionObjData';
const FormItem = Form.Item;

const Option = Select.Option;
const TableAnt = React.createClass({
	propTypes: {
		form: PropTypes.any,
	},
	getInitialState() {
		return {
			optionData: [],
			data: [
				{ key: 1, name: '胡彦斌', age: 32, typeId: '10006', description: '我是胡彦斌，今年32岁，住在西湖区湖底公园1号。' },
				{ key: 2, name: '吴彦祖', age: 42, typeId: '10010', description: '我是吴彦祖，今年42岁，住在西湖区湖底公园2号。' },
				{ key: 3, name: '李大嘴', age: 32, typeId: '10027', description: '我是李大嘴，今年32岁，住在西湖区湖底公园3号。',
			}],
		};
	},

	componentDidMount() {
		this.exchangeData();
	},

	exchangeData() {
		if (optionObjData) {
			const objO = {};
			optionObjData.data.map((out) => {
				const objI = {};// 当第一轮循环结束以后,要清空内层对象.以便下次遍历
				out.typeName.map((ini) => {
					objI[ini.cc] = ini.nn;
					return null;
				});
				objO[out.typeId] = objI;
				return null;
			});
			this.setState({
				optionData: objO,
			});
			// console.log(objO);
		}
	},

	eachOption(objI) {
		const options = [];
		for (const val in objI) {
			if (objI.hasOwnProperty) {
				options.push(<Option key= {val} value={val}>{objI[val]}</Option>);
			}
		}
		return options;
	},

	render() {
		const { data, optionData } = this.state;
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
			dataIndex: 'typeId',
			key: 'typeId',
			render: (text, record, index) => {
				// console.log(optionData[text]);
				// console.log(optionData[text]);
				// console.log(this.state.optionData);
				// {this.eachOption(optionData[text])}
				return (
					<div>
						<FormItem>
							<Select style={{ width: '100px' }} defaultValue={ index }>
								{this.eachOption(optionData[text])}
							</Select>
						</FormItem>
          </div>
				);
			},
		}, {
			title: '操作',
			dataIndex: 'operation',
			key: 'operation',
			render(text, record) {
				return (
					<div>
						<a href="#">操作一{record.name}</a>
						<span className="ant-divider"></span>
						<a href="#">操作二</a>
						<span className="ant-divider"></span>
						<a href="#" className="ant-dropdown-link">
							更多 <Icon type="down" />
						</a>
					</div>
				);
			},
		}];
		return (
			<Form horizontal form={this.props.form}>
				<Table columns={columns} dataSource={data} />;
			</Form>
			);
	},
});

export default Form.create()(TableAnt);
