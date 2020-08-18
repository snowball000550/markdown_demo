import * as React from "react";
import './index.scss';
import { Input, Button, message } from 'antd';

const { TextArea } = Input;

class MarkdownDemo extends React.Component{
	constructor(){
		super();
		this.state = {
			text: '',
			text_data: []
		}
	}

	onchange = (e) => {
		this.setState({ text: e.target.value })
	}

	render() {
		const { text, text_data } = this.state;
		return (
			<div className='editor'>
				<div className='editor-left'>
					<TextArea
						className='editor-left-textarea'
						bordered={false}
						value={text}
						onChange={this.onchange}
						// autoSize={{ minRows: 20 }}
					/>
				</div>
				<div className='editor-middle'>
					<span className='editor-middle-point'></span>
					<span className='editor-middle-point'></span>
					<span className='editor-middle-point'></span>
				</div>
				<div className='editor-right'>
					<Button type='primary'>click me</Button>
					<br />
					<br />
					<Button type='default'>click me</Button>
					<br />
					<br />
					<Input prefix="￥" suffix="RMB" />
					{
						text_data.map(item => {
							<span key={item.id}>{item.text}</span>
						})
					}
				</div>
			</div>
		)
	}
}

export default MarkdownDemo;
