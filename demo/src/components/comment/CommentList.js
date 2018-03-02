import React, {PropTypes} from 'react';
import CommentListRow from './CommentListRow';

const CommentList = ({comments}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Details</th>
      </tr>
      </thead>
      <tbody>
      {comments.map(comment =>
        <CommentListRow key={comment.id} comment={comment}/>
      )}
      </tbody>
    </table>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentList;
