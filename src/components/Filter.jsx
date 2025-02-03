import React from "react";
import { Form, Link } from "react-router-dom";
import FormInput from "./Form/FormInput";
import FormSelect from "./Form/FormSelect";
import { useLoaderData } from "react-router-dom";

const Filter = () => {
  const { params } = useLoaderData();
  const { name, category } = params;
  const categories = ["sepatu", "baju", "kemeja", "celana"];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Form
        method="get"
        className="bg-white shadow-lg rounded-xl px-8 py-6 grid gap-x-6 gap-y-4 grid-cols-1 md:grid-cols-2 items-center transition-all duration-300 hover:shadow-xl"
      >
        <h2 className="text-2xl font-bold text-center md:col-span-2 mb-2 text-primary">
          Filter Produk
        </h2>

        <FormInput
          label="Search Product"
          type="search"
          name="name"
          defaultValue={name}
          className="input input-bordered input-primary w-full focus:ring-2 focus:ring-primary"
        />

        <FormSelect
          label="Select Category"
          name="category"
          list={categories}
          defaultValue={category}
          className="select select-bordered select-primary w-full focus:ring-2 focus:ring-primary"
        />

        <div className="flex gap-4 md:col-span-2 justify-center mt-2">
          <button
            type="submit"
            className="btn btn-primary min-w-[120px] hover:scale-105 transition-transform duration-200"
          >
            <i className="fas fa-search mr-2"></i>
            SEARCH
          </button>

          <Link
            to="/products"
            className="btn btn-secondary min-w-[120px] hover:scale-105 transition-transform duration-200"
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
