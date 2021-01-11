import { useState } from "react";
import { connect } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/Action";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const todoValidation = Yup.object().shape({
  title: Yup.string().min(4, "Too Short !!").required("Title is Required"),
  description: Yup.string()
    .min(8, "Too Short !!")
    .required("Description is Required"),
  status: Yup.string().required("Status is Required"),
});

export const TodoModal = ({ data, deleteTodo, close, updateTodo }) => {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div>
      {showEdit ? (
        <>
          <Formik
            initialValues={{
              title: data.title,
              description: data.description,
              status: data.status.toString(),
            }}
            validationSchema={todoValidation}
            onSubmit={(values, { resetForm }) => {
              updateTodo(data.id, values);
              resetForm();
              close();
            }}
          >
            {({ errors, touched }) => (
              <Form className="form column">
                <h2 className="sub-title text-center">Edit Todo</h2>
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
                <Field as="select" name="status" className="input">
                  <option value="0">Belum Selesai</option>
                  <option value="1">Selesai</option>
                </Field>
                <button type="submit" className="button">
                  Edit Todo
                </button>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <>
          <h1>{data.title}</h1>
          <h4 className="mt-20">Description : {data.description}</h4>
          <h4 className="mt-10">
            Status : {data.status ? "Selesai" : "Belum Selesai"}
          </h4>
          <div className="mt-20 flex-end">
            <button className="button mr-10" onClick={() => setShowEdit(true)}>
              Edit
            </button>
            <button
              disabled={data.status}
              className={!data.status ? "button" : "button-disable"}
              onClick={() => {
                deleteTodo(data.id);
                close();
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  deleteTodo,
  updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal);
