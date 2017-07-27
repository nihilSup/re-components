//basic react
import React from "react";
import ReactDom from "react-dom";

function withDataFetch(fetchData, WrappedComponent) {
	return class extends React.Component {
		constructor(props) {
			super(props);
		}

		state = {
			data: null,
		}

		_fetchData = () => {
			this.setState({data: null});

			fetchData(this.props)
				.then(checkStatus)
				.then(parseJSON)
				.then((data) => {
					this.setState({data: data})
				});
		}

		componentWillMount() {
			this._fetchData()
		}

		componentWillReceiveProps(newProps) {
			if(JSON.stringify(this.props) === JSON.stringify(newProps)) {
				console.log("Skip update");
				return;
			}
			this.props = newProps;
			this._fetchData();
		}

		render() {

			return (
				<WrappedComponent
				  data={this.state.data}
				  fetchData={this._fetchData}
				  {...this.props}
				/>
			);
		}


	}
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export default withDataFetch;