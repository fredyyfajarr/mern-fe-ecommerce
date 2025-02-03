<<<<<<< HEAD
import CartTotal from "../components/CartTotal";
import FormInput from "../components/Form/FormInput";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import customAPI from "../api";
import { toast } from "react-toastify";
import { clearCartItem } from "../features/cartSlice";
import { redirect, useNavigate } from "react-router-dom";

const insertSnapScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute(
      "data-client-key",
=======
import CartTotal from '../components/CartTotal';
import FormInput from '../components/Form/FormInput';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import customAPI from '../api';
import { toast } from 'react-toastify';
import { clearCartItem } from '../features/cartSlice';
import { redirect, useNavigate } from 'react-router-dom';

const insertSnapScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
    script.setAttribute(
      'data-client-key',
>>>>>>> b6020ed (first commit)
      import.meta.env.VITE_CLIENT_MIDTRANS
    );
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
};

export const loader = (storage) => () => {
  const user = storage.getState().userState.user;
  if (!user) {
<<<<<<< HEAD
    toast.warn("Please login! for access this page");
    return redirect("/login");
=======
    toast.warn('Please login! for access this page');
    return redirect('/login');
>>>>>>> b6020ed (first commit)
  }
  return null;
};

const CheckoutView = () => {
  const user = useSelector((state) => state.userState.user);
  const carts = useSelector((state) => state.cartState.CartItems);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    insertSnapScript();
  }, []);

  const handleCheckout = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formdata = new FormData(form);

    const data = Object.fromEntries(formdata);

    const newArrayCart = carts.map((item) => {
      return {
        product: item.productId,
        quantity: item.amount,
      };
    });

    try {
<<<<<<< HEAD
      const response = await customAPI.post("/order", {
=======
      const response = await customAPI.post('/order', {
>>>>>>> b6020ed (first commit)
        email: data.email,
        firstName: data.firstname,
        lastName: data.lastname,
        phone: data.phone,
        cartItems: newArrayCart,
      });

      const snapToken = response.data.token;
      // SnapToken acquired from previous step
      window.snap.pay(snapToken.token, {
        // Optional
        onSuccess: function (result) {
          console.log(result);
          dispatch(clearCartItem());
<<<<<<< HEAD
          navigate("/order");
=======
          navigate('/order');
>>>>>>> b6020ed (first commit)
        },
        // Optional
        onPending: function (result) {
          console.log(result);
<<<<<<< HEAD
          alert("Pending");
=======
          alert('Pending');
>>>>>>> b6020ed (first commit)
        },
        // Optional
        onError: function (result) {
          console.log(result);
<<<<<<< HEAD
          alert("Failed");
        },
      });
      toast.success("Order Success");
=======
          alert('Failed');
        },
      });
      toast.success('Order Success');
>>>>>>> b6020ed (first commit)
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center border-b border-primary pb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 capitalize">
            Checkout Details
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please fill in your information to complete the order
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Form Section */}
          <div className="lg:col-span-8">
            <div className="bg-white shadow-lg rounded-2xl">
              <form
                method="POST"
                className="p-6 md:p-8 space-y-6"
                onSubmit={handleCheckout}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="transition-all duration-200 hover:transform hover:scale-[1.02]">
                    <FormInput
                      label="First Name"
                      type="name"
                      name="firstname"
                      className="w-full focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="transition-all duration-200 hover:transform hover:scale-[1.02]">
                    <FormInput
                      label="Last Name"
                      type="name"
                      name="lastname"
                      className="w-full focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="transition-all duration-200 hover:transform hover:scale-[1.02]">
                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    className="w-full focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="transition-all duration-200 hover:transform hover:scale-[1.02]">
                  <FormInput
                    label="Phone"
                    type="name"
                    name="phone"
                    className="w-full focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-white bg-primary rounded-lg
                    transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Proceed to Payment
                </button>
              </form>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="lg:col-span-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 sticky top-8">
              <h3 className="text-xl font-bold mb-6 pb-4 border-b">
                Order Summary
              </h3>
              <CartTotal />
            </div>
          </div>
        </div>
      </div>
    </div>
=======
    <>
      <div className="border-b border-primary pb-5 mt-5">
        <h2 className="text-2xl font-bold capitalize">Checkout product!</h2>
      </div>
      <div className="mt-8 grid gap-y-8 gap-x-2 lg:grid-cols-12">
        {/* Form */}
        <div className="lg:col-span-8">
          <form
            method="POST"
            className="bg-base-300 rounded-2xl-md grid-y-2 p-5 items-center"
            onSubmit={handleCheckout}
          >
            <div className="grid grid-cols-2 gap-x-4">
              <FormInput label="First Name" type="name" name="firstname" />
              <FormInput label="Last Name" type="name" name="lastname" />
            </div>
            <FormInput
              label="Email"
              type="email"
              name="email"
              defaultValue={user.email}
            />
            <FormInput label="Phone" type="name" name="phone" />
            <button type="submit" className="btn mt-8 btn-primary w-full">
              Proceed to Payment
            </button>
          </form>
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />
        </div>
      </div>
    </>
>>>>>>> b6020ed (first commit)
  );
};

export default CheckoutView;
