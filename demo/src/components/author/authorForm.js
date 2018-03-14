import React from 'react';
import TextInput from '../common/TextInput';
import * as authorActions from '../../actions/authorActions';


class authorForm extends React.Component{
	constructor(props,context){
		super(props,context);
		//add redirect here;
	}

	render(){
		const {authors} = this .props;
		return(
			<div>
				<h1>tt is not cute</h1>
			</div>
		)
	}
}


authorForm.propTypes = {
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
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


export default connect(mapStateToProps, mapDispatchToProps)(authorForm);