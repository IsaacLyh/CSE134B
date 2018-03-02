import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as commentActions from '../../actions/commentsActions';
import CommentForm from './CommentForm';
import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageCommentPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      comments: Object.assign({}, props.comments),
      errors: {},
      saving: false,
      deleting:false
    };

    this.updateCommentState = this.updateCommentState.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.comments.id != nextProps.comments.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({comments: Object.assign({}, nextProps.comment)});
    }
  }

  updateCommentState(event) {
    const field = event.target.name;
    let comment = Object.assign({}, this.state.comments);
    comment[field] = event.target.value;
    return this.setState({comments: comment});
  }

  commentFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.comments.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveComment(event) {
    event.preventDefault();
    if (!this.commentFormIsValid()) {
      return;
    }
    this.setState({saving: true});
    this.props.actions.saveComment(this.state.comments)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  deleteComment(event) {
    event.preventDefault();
    this.setState({deleting: true});
    alert(this.state.comments);
    this.props.actions.deleteComment(this.state.comments)
    .then(()=> this.redirect_delete())
    .catch(error => {
      toastr.error(error);
      this.setState({deleting:false});
    });
    alert(this.state.comments);
  }

  redirect_delete(){
    this.setState({deleting: false});
    toastr.success('Comment deleted');
    this.context.router.push('/courses');
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Comment saved');
    this.context.router.push('/courses');
  }

  render() {
    return (
      <CommentForm
        comment={this.state.comments}
        onChange={this.updateCommentState}
        onSave={this.saveComment}
        //onDelete = {this.deleteComment}
        errors={this.state.errors}
        deleting={this.state.deleting}
        saving={this.state.saving}
      />
    );
  }
}

ManageCommentPage.propTypes = {
  comments: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageCommentPage.contextTypes = {
  router: PropTypes.object
};

function getCommentById(comments, id) {
  const comment = comments.filter(comment => comment.id == id);
  if (comment) return comment[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const commentId = ownProps.params.id; // from the path `/course/:id`

  let comment = {id: '', title: ''};

  if (commentId && state.comments.length > 0) {
    comment = getCommentById(state.comments, commentId);
  }

  //alert(comment.id);
  return {
    comments: comment
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(commentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCommentPage);
