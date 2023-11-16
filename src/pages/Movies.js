import { Field, Form, Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';

export const Movies = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{ value: '' }}
        onSubmit={(values, actions) => {
          onSubmit(values.value);
          actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="value"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <b name="value" component="div" />
          <button type="submit">
            <span>Search</span>
            <FcSearch />
          </button>
        </Form>
      </Formik>
    </div>
  );
};
