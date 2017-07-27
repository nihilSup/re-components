//basic react
import React from "react";
import ReactDom from "react-dom";
//refresh indicator
import RefreshIndicator from "material-ui/RefreshIndicator";

const RefreshIndicatorCust = () => {
	const containerStyle = {
//		minHeight: 430,
		display: "flex", 
		alignItems: "center", 
		position: "relative", 
		justifyContent: "center",
		marginTop: "20%"
	}
	const refreshStyle = {
		position: "relative",
	}
	return (
		<div style={containerStyle}>
		  <RefreshIndicator
		    size={50}
		    left={0}
		    top={0}
		    status="loading"
		    style={refreshStyle}
		  />
		</div>
	);
};

export default RefreshIndicatorCust;