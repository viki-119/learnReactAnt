import React, { PropTypes } from 'react';
import { Form, Row, Col, Input, Button, Radio, Select, InputNumber } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const SelectAnt = React.createClass({
	propTypes: {
		form: PropTypes.any,
	},
	getInitialState() {
		return {
			value: 'b',
		};
	},
	onChange(e) {
		console.log('radio checked', e.target.value);
		this.setState({
			value: e.target.value,
		});
		this.props.form.resetFields(['textarea']);
	},
	onSelect(value, option) {
		console.log({ value }, option.props.children);
	},

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((errors) => {
			if (!!errors) {
				console.log('Errors in form!!!');
				return;
			}
		});
		console.log('收到表单值：', this.props.form.getFieldsValue());
		console.log('收到表单值：', this.props.form.getFieldValue('userName'), this.state.value);
		// this.props.form.setFieldsValue({
		//   textarea: 'haha',
		// });
	},
	handleReset(e) {
		e.preventDefault();
		this.props.form.resetFields();
		// 如果要是要清除部分，则可以采用如下写法，不管是哪种清除，都无法清除radio
		// this.props.form.resetFields(['userName', 'nickName']);
	},

	onDuplicate() {
		alert('xx');
	},

	limitMemo(rule, value, callback) {
		if (value && value.length > 200) {
			callback('字符不能超过200');
		} else {
			callback();
		}
	},
	render() {
		const { getFieldProps } = this.props.form;
		// getFieldProps('userName')是进行双向数据绑定用的，可以用来做检索传值
		// console.log(getFieldProps('userName'));
		// console.log(getFieldsValue());

		const textareaProps = getFieldProps('textarea', {
			rules: [
				{
					required: this.state.value === 4,
					message: '真的不打算写点什么吗？',
				},
				{
					validator: this.limitMemo,
				},
			],
			initialValue: '',
		});
		const formItemLayout = {
			labelCol: { span: 7, offset: 1 },
			wrapperCol: { span: 15 },
		};
		const radioStyle = {
			display: 'block',
			height: '30px',
			lineHeight: '30px',
		};
		return (
			<Form onSubmit = {this.handleSubmit} form={this.props.form}>
				<Row>
					<Col span="10" offset="1">
						<FormItem label ="InputNumber输入框：" labelCol ={{ span: 8 }} wrapperCol ={{ span: 8 }}>
							<InputNumber min={1} max={10} style={{ width: 100 }} {...getFieldProps('inputNumber', { initialValue: 3 })} />
							<span className="ant-form-text"> 台机器</span>
						</FormItem>
					</Col>
					<Col span="10" offset="1">
						<FormItem label ="userName：" labelCol ={{ span: 8 }} wrapperCol ={{ span: 15 }}>
							<Input size="large" placeholder="InputGroup" {...getFieldProps('userName')} />
						</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span="10" offset="1">
						<FormItem label ="nickName：" labelCol ={{ span: 8 }} wrapperCol ={{ span: 15 }}>
							<Input id="largeInput" size="large" placeholder="Input" {...getFieldProps('nickName')} />
						</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span="10" offset="1">
						<FormItem label ="Radio：" labelCol ={{ span: 8 }} wrapperCol ={{ span: 15 }}>
							<RadioGroup {...getFieldProps('radio', { initialValue: 'b', onChange: this.onChange })}>
								<Radio style={radioStyle} key="a" value="a">Option A</Radio>
								<Radio style={radioStyle} key="b" value="b">Option B</Radio>
								<Radio style={radioStyle} key="c" value={3}>Option C</Radio>
								<Radio style={radioStyle} key="d" value={4}>
									More...
									{this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
								</Radio>
							</RadioGroup>
						</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span="10" offset="1">
						<FormItem {...formItemLayout} label="备注：">
							<Input {...textareaProps} type="textarea" placeholder="随便写" />
						</FormItem>
					</Col>
					<Col span={10} offset={1}>
						<FormItem {...formItemLayout} label="select：">
							<Select {...getFieldProps('name', { initialValue: '' })} onSelect={this.onSelect}>
								<Option key="1" value="">全部</Option>
								<Option key="xx" value="jack">Jack</Option>
								<Option key="lucy">Lucy</Option>
								<Option value="yiminghe">Yiminghe</Option>
							</Select>
						</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span="10" offset="1">
						<FormItem {...formItemLayout} label="带搜索框select：">
							<Select showSearch
								style={{ width: 300 }}
								placeholder="请选择人员"
								optionFilterProp="children"
								notFoundContent="无法找到"
								{...getFieldProps('Duplicate', { initialValue: '', onChange: this.onDuplicate })}
								>
								<Option key="jack">杰克</Option>
								<Option key="lucy">露西</Option>
								<Option key="tom">汤姆</Option>
							</Select>
						</FormItem>
					</Col>
					<Col span="10" offset="1">
						<FormItem {...formItemLayout} label="多选select：">
							<Select multiple style={{ width: 300 }} placeholder="请选择人员" defaultValue = {['jack', 'lucy']}
								notFoundContent="无法找到">
								<Option key="jack">杰克</Option>
								<Option key="lucy">露西</Option>
								<Option key="tom">汤姆</Option>
							</Select>
						</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span="10" offset="1">
						<FormItem {...formItemLayout} label="多选且带搜索框select：">
							<Select multiple showSearch style={{ width: 300 }} placeholder="请选择人员" optionFilterProp="children"
								notFoundContent="无法找到">
								<Option key="jack">杰克</Option>
								<Option key="lucy">露西</Option>
								<Option key="tom">汤姆</Option>
							</Select>
						</FormItem>
					</Col>
				</Row>
				<Button type="primary" htmlType="submit">搜索</Button>
				<Button type="primary" onClick={this.handleReset}>清除条件</Button>
			</Form>
		);
	},
});

export default Form.create()(SelectAnt);
