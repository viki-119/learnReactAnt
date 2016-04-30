import React, { PropTypes } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const FormAnt = React.createClass({
  form: PropTypes.object,
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
    console.log('收到表单值：', this.props.form.getFieldValue('userName'));
  },

  render() {
    const { getFieldProps } = this.props.form;
    // getFieldProps('userName')是进行双向数据绑定用的，可以用来做检索传值
    console.log(getFieldProps('userName'));
    console.log(getFieldProps('agreement'));
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem label="账户：">
          <Input placeholder="请输入账户名" {...getFieldProps('userName')} />
        </FormItem>
        <FormItem label="密码：">
          <Input type="password" placeholder="请输入密码" {...getFieldProps('password')} />
        </FormItem>
        <FormItem>
          <label className="ant-checkbox-inline">
            <Checkbox {...getFieldProps('agreement')} />记住我
          </label>
        </FormItem>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form>
    );
  },
});

export default Form.create()(FormAnt);
