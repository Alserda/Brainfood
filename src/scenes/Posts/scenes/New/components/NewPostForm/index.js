import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

const NewPostForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field name='title' type='text' component='input' placeholder='Title' />
      <Field name='body' type='text' component='textarea' placeholder='Body' />
      <div>
        <button type='submit' disabled={submitting}>Submit</button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'NewPostForm',
})(NewPostForm);
