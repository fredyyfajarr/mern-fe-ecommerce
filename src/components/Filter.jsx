import React from 'react';
import { Form, Link } from 'react-router-dom';
import FormInput from './Form/FormInput';
import FormSelect from './Form/FormSelect';
import { useLoaderData } from 'react-router-dom';

const Filter = () => {
  const { params } = useLoaderData();
  const { name, category } = params;
  const categories = ['sepatu', 'baju', 'kemeja', 'celana'];

  return (
    <div className="w-full px-4 sm:max-w-4xl sm:mx-auto py-2 sm:py-4">
      <Form
        method="get"
        className="bg-base-100 shadow-lg rounded-xl p-4 sm:px-8 sm:py-6 grid gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4 grid-cols-1 md:grid-cols-2 items-center transition-all duration-300 hover:shadow-xl"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center md:col-span-2 mb-1 sm:mb-2 text-primary">
          Filter Produk
        </h2>

        <FormInput
          label={<span className="text-base-content">Search Product</span>}
          type="search"
          name="name"
          defaultValue={name}
          className="input input-bordered input-primary w-full text-sm sm:text-base focus:ring-2 focus:ring-primary bg-base-200 text-base-content"
        />

        <FormSelect
          label={<span className="text-base-content">Select Category</span>}
          name="category"
          list={categories}
          defaultValue={category}
          className="select select-bordered select-primary w-full text-sm sm:text-base focus:ring-2 focus:ring-primary bg-base-200 text-base-content"
        />

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:col-span-2 justify-center mt-1 sm:mt-2">
          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto lg:w-[200px] text-sm sm:text-base hover:scale-105 transition-transform duration-200"
          >
            <i className="fas fa-search mr-2"></i>
            SEARCH
          </button>

          <Link
            to="/products"
            className="btn btn-secondary w-full sm:w-auto lg:w-[200px] text-sm sm:text-base hover:scale-105 transition-transform duration-200"
          >
            <i className="fas fa-undo mr-2"></i>
            RESET
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Filter;
