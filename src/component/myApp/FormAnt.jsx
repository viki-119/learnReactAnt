import React, { PropTypes } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';

const FormItem = Form.Item;
const FormAnt = React.createClass({
	propTypes: {
		form: PropTypes.any,
	},

	getInitialState() {
		return {
			value: 'b',
		};
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
	},

	render() {
		const { getFieldProps } = this.props.form;
		// getFieldProps('userName')是进行双向数据绑定用的，可以用来做检索传值
		// console.log(getFieldProps('userName'));
		// console.log(getFieldsValue());
		return (
			<Form inline onSubmit = {this.handleSubmit} form={this.props.form}>
				<Row>
					<Col span="6" offset="1">
						<Input id="largeInput" size="large" placeholder="大尺寸" />
					</Col>
					<Col span="6" offset="1">
						<Input id="defaultInput" placeholder="默认尺寸" />
					</Col>
					<Col span="6" offset="1">
						<Input id="smallInput" placeholder="小尺寸" size="small" />
					</Col>
				</Row>
				<FormItem label="账户：">
					<Input placeholder="请输入账户名" {...getFieldProps('userName', { initialValue: '123' })} />
				</FormItem>
				<FormItem label="密码：">
					<Input placeholder="请输入密码" type="password" {...getFieldProps('password')} />
				</FormItem>
				<FormItem>
					<label className="ant-checkbox-inline">
						<Checkbox {...getFieldProps('agreement', { valuePropName: 'checked', initialValue: 'checked' })} />记住我
					</label>
				</FormItem>
				<Button type="primary" htmlType="submit">登录</Button>
				<Button type="primary" onClick={this.handleReset}>清除</Button>
			</Form>
		);
	},
});

export default Form.create()(FormAnt);
