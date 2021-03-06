import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CommentForm = ({comment, onSave, onChange, saving, deleting, errors}) => {
  return (
    <form>
      <h1>Manage Comment</h1>
      <TextInput
        name="title"
        label="Comment"
        value={comment.title}
        onChange={onChange}
        error={errors.title}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>

        <input
        type="submit"
        disabled={deleting}
        value={deleting ? 'Deleting...' : 'Delete'}
        className="btn btn-primary"
        onClick={deleting}/>
    </form>
  );
};

CommentForm.propTypes = {
  comment: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  //onDelete: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  deleting: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CommentForm;
