import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { createTodo } from "../Redux/Action";

const todoValidation = Yup.object().shape({
  title: Yup.string().min(4, "Too Short !!").required("Title is Required"),
  description: Yup.string()
    .min(8, "Too Short !!")
    .required("Description is Required"),
});

export const InputTodo = ({ createTodo }) => {
  const handleSubmit = (values) => {
    createTodo({ ...values, status: 0 });
  };

  return (
    <>
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={todoValidation}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form column mr-40">
            <h2 className="sub-title text-center">Add Todo</h2>
            {errors.title && touched.title && <p>{errors.title}</p>}
            <Field name="title" placeholder="Title" className="input" />
            {errors.description && touched.description && (
              <p>{errors.description}</p>
            )}
            <Field
              as="textarea"
              rows="5"
              name="description"
              placeholder="Description"
              className="input"
            />
            <button type="submit" className="button">Add Todo</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  createTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);
