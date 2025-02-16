import React from 'react';
import FormInput from './Form/FormInput';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import customAPI from '../api';
import { loginUser, registerUser } from '../features/userSlice';

const FormAuth = ({ isRegister, isModal = false, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const endpoint = isRegister ? '/auth/register' : '/auth/login';
      const response = await customAPI.post(endpoint, data);
      
      if (isRegister) {
        dispatch(registerUser(response.data));
        toast.success('Register Success');
      } else {
        dispatch(loginUser(response.data));
        toast.success('Login Success');
      }
      
      if (onClose) onClose();
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`card ${!isModal ? 'w-96' : 'w-full'} p-8 bg-base-100 flex flex-col gap-y-4`}
    >
      <h4 className="text-center text-3xl font-bold">
        {isRegister ? 'Register' : 'Login'}
      </h4>
      {isRegister && <FormInput type="name" name="name" label="Username" />}
      <FormInput type="email" name="email" label="Email" />
      <FormInput type="password" name="password" label="Password" />
      <div className="mt-4">
        <button type="submit" className="btn btn-primary btn-block">
          {isRegister ? 'Register' : 'Login'}
        </button>
      </div>
    </form>
  );
};

export default FormAuth;
