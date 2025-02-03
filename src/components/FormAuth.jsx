<<<<<<< HEAD
import React from "react";
import { Form, Link } from "react-router-dom";
import FormInput from "./Form/FormInput";
=======
import React from 'react';
import { Form, Link } from 'react-router-dom';
import FormInput from './Form/FormInput';
>>>>>>> b6020ed (first commit)

const FormAuth = ({ isRegister }) => {
  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-300 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">
<<<<<<< HEAD
          {isRegister ? "Register" : "Login"}
=======
          {isRegister ? 'Register' : 'Login'}
>>>>>>> b6020ed (first commit)
        </h4>
        {isRegister ? (
          <FormInput type="name" name="name" label="Username" />
        ) : null}
        <FormInput type="email" name="email" label="Email" />
        <FormInput type="password" name="password" label="Password" />
        <div className="mt-4">
          <button type="submit" className="btn btn-primary btn-block">
<<<<<<< HEAD
            {isRegister ? "Register" : "Login"}
=======
            {isRegister ? 'Register' : 'Login'}
>>>>>>> b6020ed (first commit)
          </button>
        </div>
        {isRegister ? (
          <p className="text-center">
            Already Have Account?
            <Link
              to="/login"
              className="ml-2 link link-hover link-accent capitalize"
            >
              Sign In here!
            </Link>
          </p>
        ) : (
          <p className="text-center">
            Not Have Account?
            <Link
              to="/register"
              className="ml-2 link link-hover link-accent capitalize"
            >
              Sign Up here!
            </Link>
          </p>
        )}
      </Form>
    </div>
  );
};

export default FormAuth;
