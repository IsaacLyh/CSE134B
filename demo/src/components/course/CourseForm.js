import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Recipe</h1>
      <TextInput
        name="title"
        label="Name"
        value={course.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="authorId"
        label="Maker"
        value={course.authorId}
        defaultOption="Select Maker"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}/>

      <TextInput
        name="Style"
        label="Style"
        value={course.Style}
        onChange={onChange}
        error={errors.category}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CourseForm;
