//basic react
import React from "react";
import ReactDom from "react-dom";
//icons
import MoodIcon from 'material-ui/svg-icons/social/mood';
//buttons
import IconButton from 'material-ui/IconButton';
import {fullWhite} from "material-ui/styles/colors";
import FlatButton from 'material-ui/FlatButton';
//appbar
import AppBar from 'material-ui/AppBar';

/*
  Combines AppBar and input Content
*/
const HOCMainDinfo = (Content, RightElement, title) => class extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<AppBar
				  title={title? title : "DInfo Admin"}
				  iconElementLeft={
				  	<IconButton>
				  		<MoodIcon color={fullWhite} />
				  	</IconButton>
				  }
				  iconElementRight={
				  	RightElement? (
			  			<RightElement
			  			{...this.props}
			  			/> 
			  		) : (
			  			null
			  		)
				  }
				/>
				<br />
				<Content {...this.props}/>
			</div>
		);
	}
}

export default HOCMainDinfo;