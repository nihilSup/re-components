//basic react
import React from "react";
import ReactDom from "react-dom";

function withLocalStorage(loadData, saveData, WrappedComponent) {
	return class extends React.Component {
		constructor(props) {
			super(props);
		}

		state = {
			localData: null,
		}

		_loadData = () => {
			this.setState({localData: null});
			const newState = {
				localData: loadData(this.props),
			};
			this.setState(newState);
		}

		_saveData = (newData) => {
			saveData(newData);
			this._loadData();
		}

		componentWillMount() {
			this._loadData()
		}

		render() {

			return (
				<WrappedComponent
				  localData={this.state.localData}
				  loadLocalData={this._loadData}
				  saveLocalData={this._saveData}
				  {...this.props}
				/>
			);
		}


	}
}	

export default withLocalStorage;