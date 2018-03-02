import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import commentApi from '../../api/mockComments';

const CommentListRow = ({comment}) => {
  return (
    <tr>
      <td><Link to={'/comment/' + comment.id}>{comment.title}</Link></td>
    </tr>
  );
};

CommentListRow.propTypes = {
  comment: PropTypes.object.isRequired
};


export default CommentListRow;
