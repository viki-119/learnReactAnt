import React, { PropTypes } from 'react';
import { Form, Row, Col, Input, Button, Checkbox, Radio, Select } from 'antd';

const FormItem = Form.Item;
const InputGroup = Input.Group;
const RadioGroup = Radio.Group;

const FormAnt = React.createClass({
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
  },
  handleChange(value, option) {
    console.log({ value }, option.props.children);
  },
  limitMemo(rule, value, callback) {
    if (value && value.length > 200) {
      callback('字符不能超过200');
    } else {
      callback();
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
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
    const { getFieldProps, getFieldsValue } = this.props.form;
    // getFieldProps('userName')是进行双向数据绑定用的，可以用来做检索传值
    // console.log(getFieldProps('userName'));
    // console.log(getFieldsValue());

    const textareaProps = getFieldProps('textarea', {
      rules: [
        {
          required: this.state.value === 4 ? true : false,
          message: '真的不打算写点什么吗？',
        },
        {
          validator: this.limitMemo,
        },
      ],
      initialValue: 'jack',
      onChange: this.handleReset,
    });
    const formItemLayout = {
      labelCol: { span: 7, offset: 2 },
      wrapperCol: { span: 12 },
    };
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <Form inline onSubmit = {this.handleSubmit} form={this.props.form}>
        <FormItem label="账户：">
          <Input placeholder="请输入账户名" {...getFieldProps('userName', { defaultValue: '123' })} />
        </FormItem>
        <FormItem label="密码：">
          <Input placeholder="请输入密码" type="password" {...getFieldProps('password')} />
        </FormItem>
        <FormItem>
          <label className="ant-checkbox-inline">
            <Checkbox {...getFieldProps('agreement')} />记住我
          </label>
        </FormItem>
        <Button type="primary" htmlType="submit">登录</Button>
        <Button type="primary" onClick={this.handleReset}>清除</Button>
        <hr />
        <Row>
          <InputGroup>
            <Col span="15" offset="20">
            <Input id="largeInput" size="large" placeholder="InputGroup" {...getFieldProps('xx')} />
            </Col>
          </InputGroup>
          <Col span="15" offset="2">
            <Input id="largeInput" size="large" placeholder="Input" {...getFieldProps('xx')} />
          </Col>
        </Row>
        <RadioGroup onChange={this.onChange} defaultValue={this.state.value} >
          <Radio style={radioStyle} key="a" value="a">Option A</Radio>
          <Radio style={radioStyle} key="b" value="b">Option B</Radio>
          <Radio style={radioStyle} key="c" value={3}>Option C</Radio>
          <Radio style={radioStyle} key="d" value={4}>
            More...
            {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
          </Radio>
        </RadioGroup>
        <FormItem {...formItemLayout} label="备注：">
          <Input {...textareaProps} type="textarea" placeholder="随便写" />
        </FormItem>
        <FormItem {...formItemLayout} label="select：">
          <Select {...getFieldProps('name', { initialValue: 'jack' })}
          style={{ width: 120 }} onSelect={this.handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="yiminghe">Yiminghe</Option>
          </Select>
        </FormItem>
      </Form>
    );
  },
});

export default Form.create()(FormAnt);
