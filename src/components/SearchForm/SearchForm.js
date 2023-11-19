import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';
import {
  ButtonLabelStyled,
  ButtonStyled,
  FormStyled,
  InputStyled,
} from './SearchForm.styled';

export const SearchForm = ({ onSubmit, value }) => {
  return (
    <Formik
      initialValues={{ value: value }}
      onSubmit={(values, actions) => {
        onSubmit(values.value);
        actions.resetForm();
      }}
    >
      <FormStyled>
        <InputStyled
          type="text"
          name="value"
          autoComplete="off"
          autoFocus
          placeholder="Search videos"
          required
        />
        <b name="value" component="div" />
        <ButtonStyled type="submit">
          <ButtonLabelStyled>Search</ButtonLabelStyled>
          <FcSearch />
        </ButtonStyled>
      </FormStyled>
    </Formik>
  );
};
