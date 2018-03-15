import React from 'react';
import TextInput from '../common/TextInput';
import * as authorActions from '../../actions/authorActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class authorForm extends React.Component{
	constructor(props,context){
		super(props,context);
		//add redirect here;
	}

	render(){
		const {authors} = this .props;
		return(
			<div>
				<h1>tt is lyh's daddy</h1>
			</div>
		);
	}
}


authorForm.propTypes = {
  actions: React.PropTypes.object.isRequired,
  authors: React.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(authorForm);