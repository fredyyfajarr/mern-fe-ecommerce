<<<<<<< HEAD
import React from "react";
import FormAuth from "../../components/FormAuth";
import customAPI from "../../api";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { loginUser } from "../../features/userSlice";
=======
import React from 'react';
import FormAuth from '../../components/FormAuth';
import customAPI from '../../api';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
import { loginUser } from '../../features/userSlice';
>>>>>>> b6020ed (first commit)

export const action =
  (store) =>
  async ({ request }) => {
    const formInputData = await request.formData();
    const data = Object.fromEntries(formInputData);

    try {
<<<<<<< HEAD
      const response = await customAPI.post("/auth/login", data);
      store.dispatch(loginUser(response.data));
      toast.success("Login Success");
      return redirect("/");
=======
      const response = await customAPI.post('/auth/login', data);
      store.dispatch(loginUser(response.data));
      toast.success('Login Success');
      return redirect('/');
>>>>>>> b6020ed (first commit)
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
      return null;
    }
  };

const LoginView = () => {
  return (
    <main>
      <FormAuth />
    </main>
  );
};

export default LoginView;
