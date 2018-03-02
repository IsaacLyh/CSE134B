import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as commentActions from '../../actions/commentsActions';
import CourseList from './CourseList';
import CommentList from '../comment/CommentList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  redirectToAddCommentPage(){
    browserHistory.push('/comment');
  }

  render() {
    const {courses} = this.props;
    const {comments} = this.props;
    //alert(comments);
    return (
      <div>
        <h1>Add Recipe</h1>
        <input type="submit"
               value="Add Recipe"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
        <h1>Add Comment</h1>
        <input type="submit"
               value="Add Comment"
               className="btn btn-primary"
               onClick={this.redirectToAddCommentPage}/>
        <CommentList comments={comments}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
