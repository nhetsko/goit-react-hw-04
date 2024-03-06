import { Field, Form, Formik } from 'formik';
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';

import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === '') {
            toast.error('Enter image name!');
          } else {
            onSubmit(values.query);
            actions.resetForm();
          }
        }}
      >
        <Form className={css.searchBar}>
          <div className={css.inputContainer}>
          <button className={css.search} type="submit">
          <FaSearch/>
          </button>
          <Field
      
            className={css.field}
            name="query"
            placeholder="Search images and photos"
            />
            </div>
        </Form>
      </Formik>
    </header>
  );
}