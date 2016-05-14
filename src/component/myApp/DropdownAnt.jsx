import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';


function menu() {
	return (
		<Menu>
			<Menu.Item key="0">
				<a href="http://www.alipay.com/">第一个菜单项1</a>
			</Menu.Item>
			<Menu.Item key="1">
				<a href="http://www.taobao.com/">第二个菜单项1</a>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="3">第三个菜单项1</Menu.Item>
		</Menu>
  );
}

const menus = (
	<Menu>
		<Menu.Item key="0">
			<a href="http://www.alipay.com/">第一个菜单项2</a>
		</Menu.Item>
		<Menu.Item key="1">
			<a href="http://www.taobao.com/">第二个菜单项2</a>
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item key="3">第三个菜单项2</Menu.Item>
	</Menu>
	);

const DropdownAnt = React.createClass({
	render() {
		return (
		<div>
			<Dropdown overlay={menu()} trigger={['click']}>
				<a className="ant-dropdown-link" href="#">
				点击触发1 <Icon type="down" />
				</a>
			</Dropdown>
			<span style={{ marginLeft: '22px' }} />
			<Dropdown overlay={menus} trigger={['click']}>
				<a className="ant-dropdown-link" href="#">
				点击触发2 <Icon type="down" />
				</a>
			</Dropdown>
		</div>
			);
	},
});

export default DropdownAnt;
