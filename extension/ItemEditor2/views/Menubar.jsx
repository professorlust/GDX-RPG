import React from 'react';
import {FlatButton, Paper, Menu, MenuItem, Divider} from 'material-ui';
import IconMenu from './IconMenu';
import Setting from 'material-ui/svg-icons/action/settings';
import ReactDOM from 'react-dom';

import About from './About'
import PathSelector from "./PathSelector";

const style = {
	top: '100px'
};

export default class Menubar extends React.Component {

	constructor(props){
		super(props);

		window.addEventListener("keydown", e => this.press(e.code));
	}

	press(code){
		switch(code){
			case "F5": 	E.files.reload()
		}
	}
	
	render() {
		return(
			<Paper zDepth={1} className="menubar">
				<IconMenu className="menuctx" iconButtonElement={<FlatButton label="文件"/>} anchorOrigin={{horizontal: 'left', vertical: 'top'}} targetOrigin={{horizontal: 'left', vertical: 'top'}}>
					<MenuItem primaryText="设定assets文件夹位置..." rightIcon={<Setting />} onClick={() => {ReactDOM.render(<PathSelector open={true}/>, document.getElementById("dialog"))}} />
					<MenuItem primaryText="打开assets文件夹" onClick={() => {const {shell} = require('electron'); shell.openItem(window.localStorage["path"]);}}/>
					<Divider />
					<MenuItem primaryText="保存当前文件" secondaryText="Ctrl+S"/>
					<Divider />
					<MenuItem primaryText="刷新所有文件" secondaryText="F5" onClick={() => this.press("F5")}/>
					<MenuItem primaryText="强制刷新所有文件" onClick={() => E.files.reload(false)}/>
					<Divider />
					<MenuItem primaryText="退出" />
					</IconMenu>
				<IconMenu className="menuctx" iconButtonElement={<FlatButton label="编辑"/>} anchorOrigin={{horizontal: 'left', vertical: 'top'}} targetOrigin={{horizontal: 'left', vertical: 'top'}}>
					<MenuItem primaryText="撤销" secondaryText="Ctrl+Z"/>
					<MenuItem primaryText="重做" secondaryText="Ctrl+Y"/>
					<Divider />
					<MenuItem primaryText="全选" secondaryText="Ctrl+A"/>
					<MenuItem primaryText="删除" secondaryText="Delete"/>
					<Divider />
					<MenuItem primaryText="剪切" secondaryText="Ctrl+A"/>
					<MenuItem primaryText="复制" secondaryText="Ctrl+A"/>
					<MenuItem primaryText="复制当前文件路径"/>
					<MenuItem primaryText="粘贴" secondaryText="Ctrl+V"/>
					<Divider />
					<MenuItem primaryText="格式化当前代码" secondaryText="Ctrl+F"/>
				</IconMenu>
				<IconMenu className="menuctx" iconButtonElement={<FlatButton label="视图"/>} anchorOrigin={{horizontal: 'left', vertical: 'top'}} targetOrigin={{horizontal: 'left', vertical: 'top'}}>
					<MenuItem primaryText="切换代码/编辑窗口"/>
					<MenuItem primaryText="定位当前文件"/>
				</IconMenu>
				<IconMenu className="menuctx" iconButtonElement={<FlatButton label="工具"/>} anchorOrigin={{horizontal: 'left', vertical: 'top'}} targetOrigin={{horizontal: 'left', vertical: 'top'}}>
					<MenuItem primaryText="启动秘封异闻录(GDX-RPG)" secondaryText="F11"/>
					<Divider />
					<MenuItem primaryText="首选项..."/>
				</IconMenu>
				<IconMenu className="menuctx" iconButtonElement={<FlatButton label="其他"/>} anchorOrigin={{horizontal: 'left', vertical: 'top'}} targetOrigin={{horizontal: 'left', vertical: 'top'}}>
					<MenuItem primaryText="关于GDX-RPG资源编辑器..." onClick={() => {ReactDOM.render(<About open={true}/>, document.getElementById("dialog"))}}/>
				</IconMenu>
			</Paper>
		)
	}
}