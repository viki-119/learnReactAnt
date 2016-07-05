import React from 'react';
import { Upload, Icon, Modal } from 'antd';

const UploadAnt = React.createClass({
	getInitialState() {
		return {
			priviewVisible: false,
			priviewImage: '',
		};
	},
	handleCancel() {
		this.setState({
			priviewVisible: false,
		});
	},
	render() {
		const props = {
			action: '/upload.do',
			listType: 'picture-card',
			defaultFileList: [{
				uid: -1,
				name: 'xxx.png',
				status: 'done',
				url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
				thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
			}],
			onPreview: (file) => {
				this.setState({
					priviewImage: file.url,
					priviewVisible: true,
				});
			},
		};
		const root1 = (
		<ul className="my-list">
			<li style={{ color: 'white' }}>First Text Content</li>
			<li>Second Text Content</li>
		</ul>
		);
		const child1 = React.createElement('li', null, 'First Text Content');
		const child2 = React.createElement('li', null, 'Second Text Content');
		const root2 = React.createElement('ul', { className: 'my-list', style: { color: 'red', fontSize: 14 } }, child1, child2, child1);
		return (
			<div className="clearfix">
				<Upload {...props}>
					<Icon type="plus" />
					<div className="ant-upload-text">上传照片</div>
				</Upload>
				<a href="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" target="_blank" className="upload-example">
					<img alt="example" src="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" />
					<span>示例</span>
				</a>
				<Modal visible={this.state.priviewVisible} footer={null} onCancel={this.handleCancel}>
					<img alt="example" src={this.state.priviewImage} />
				</Modal>
				<div style={{ background: 'red' }}>
					{root1}
				</div>
				<div style={{ background: 'yellow' }}>
					{root2}
				</div>
			</div>
		);
	},
});
export default UploadAnt;
