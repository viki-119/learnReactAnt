import React, { PropTypes } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Radio } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const FormQuery = React.createClass({
	propTypes: {
		form: PropTypes.object,
	},

	getInitialState() {
		return {
			type: 'OK',
		};
	},

	onChange(e) {
		this.setState({
			type: e.target.value,
		});
	},

	onSearch(e) {
		e.preventDefault();
		// const info = {...this.props.form.getFieldsValue()};
	},

	reset(e) {
		e.preventDefault();
		this.props.form.resetFields();
	},

	handleSubmit(e) {
		e.preventDefault();
		console.log('收到表单值：', this.props.form.getFieldsValue());
		console.log('收到用户名：', this.props.form.getFieldValue('userName'));
		// console.log(this.props.form.getFieldValue('checkStatus'));
	},

	render() {
		const { getFieldProps } = this.props.form;
		// getFieldProps('userName')是进行双向数据绑定用的，可以用来做检索传值
		console.log(this.props.form);
		console.log(getFieldProps('userName'));
		console.log(getFieldProps('password'));
		console.log(this.state.type);
		return (
			<div style={{ margin: '20px auto', textAlign: 'center' }}>
				<Form horizontal onSubmit={this.handleSubmit} form={this.props.form}>
					<Row>
						<Col span="8">
							{(this.props.form.getFieldValue('phone') === '110') && (
								<FormItem
									labelCol ={{ span: 6 }}
									wrapperCol={{ span: 18 }}
									label="账户："
									required >
									<Input placeholder="请输入" {...getFieldProps('userName')}/>
								</FormItem>
							)}
						</Col>
						<Col span="8">
							<FormItem
								labelCol={{ span: 6 }}
								wrapperCol={{ span: 18 }}
								label="密码: ">
								<Input type="password" placeholder="请输入" {...getFieldProps('password')}/>
							</FormItem>
						</Col>
					</Row>
					<Row>
						<Col span="8">
							<FormItem
								labelCol={{ span: 6 }}
								wrapperCol={{ span: 18 }}
								label="手机号: ">
								<Input placeholder="请输入" {...getFieldProps('phone')}/>
							</FormItem>
						</Col>
					</Row>
					<Row>
						<Col>
							<FormItem>
								<label className="ant-checkbox-inline">
									<Checkbox {...getFieldProps('agreement')} />记住我
								</label>
							</FormItem>
						</Col>
					</Row>
					<FormItem label="结果：" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
						<RadioGroup {...getFieldProps('checkStatus', { onChange: this.onChange, initialValue: this.state.type })}>
							<Radio value="OK">通过</Radio>
							<Radio value="NOT_OK">不通过</Radio>
							<Radio value="UPDATE">待检测</Radio>
						</RadioGroup>
					</FormItem>
					<Button type="primary" htmlType="submit">登录</Button>
				</Form>
			</div>
			);
	},

});

export default Form.create()(FormQuery);
