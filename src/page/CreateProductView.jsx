<<<<<<< HEAD
import FormInput from "../components/Form/FormInput";
import FormSelect from "../components/Form/FormSelect";
import FormTextArea from "../components/Form/FormTextArea";
import customAPI from "../api";
import { toast } from "react-toastify";
import { useNavigate, redirect } from "react-router-dom";
=======
import FormInput from '../components/Form/FormInput';
import FormSelect from '../components/Form/FormSelect';
import FormTextArea from '../components/Form/FormTextArea';
import customAPI from '../api';
import { toast } from 'react-toastify';
import { useNavigate, redirect } from 'react-router-dom';
>>>>>>> b6020ed (first commit)

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
<<<<<<< HEAD
    toast.warn("Please login! for access this page");
    return redirect("/login");
  }
  if (user.role != "owner") {
    toast.warn("You are not allowed to access this page");
    return redirect("/");
=======
    toast.warn('Please login! for access this page');
    return redirect('/login');
  }
  if (user.role != 'owner') {
    toast.warn('You are not allowed to access this page');
    return redirect('/');
>>>>>>> b6020ed (first commit)
  }
  return null;
};

const CreateProductView = () => {
<<<<<<< HEAD
  const categories = ["sepatu", "baju", "kemeja", "celana"];
=======
  const categories = ['sepatu', 'baju', 'kemeja', 'celana'];
>>>>>>> b6020ed (first commit)
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const dataForm = new FormData(form);

    const data = Object.fromEntries(dataForm);
    try {
      // upload file
      const responseFileUpload = await customAPI.post(
<<<<<<< HEAD
        "product/file-upload",
=======
        'product/file-upload',
>>>>>>> b6020ed (first commit)
        {
          image: data.image,
        },
        {
          headers: {
<<<<<<< HEAD
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response Image", responseFileUpload.data.url);

      // create Product
      await customAPI.post("/product", {
=======
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Response Image', responseFileUpload.data.url);

      // create Product
      await customAPI.post('/product', {
>>>>>>> b6020ed (first commit)
        name: data.name,
        price: data.price,
        stock: data.stock,
        description: data.description,
        category: data.category,
        image: responseFileUpload.data.url,
      });

<<<<<<< HEAD
      toast.success("Add Product Success");
      navigate("/products");
=======
      toast.success('Add Product Success');
      navigate('/products');
>>>>>>> b6020ed (first commit)
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-primary mb-8">
          Tambah Produk Baru
        </h2>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-6"
        >
          {/* Image Upload Section */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Foto Produk
              </span>
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-2 border-dashed border-primary rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400">
                    Pilih foto produk
                  </p>
                </div>
                <input type="file" name="image" className="opacity-0" />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormSelect
              name="category"
              label="Kategori Produk"
              list={categories}
              className="select select-primary w-full"
            />
            <FormInput
              name="name"
              label="Nama Produk"
              type="text"
              className="input input-primary w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              name="price"
              label="Harga Produk"
              type="number"
              className="input input-primary w-full"
            />
            <FormInput
              name="stock"
              label="Stok Produk"
              type="number"
              className="input input-primary w-full"
            />
          </div>

          <FormTextArea
            name="description"
            label="Deskripsi Produk"
            className="textarea textarea-primary w-full h-32"
          />

          <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate("/products")}
              className="btn btn-outline btn-md"
            >
              Batal
            </button>
            <button type="submit" className="btn btn-primary btn-md px-8">
              Simpan Produk
            </button>
          </div>
        </form>
      </div>
    </div>
=======
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label className="form-control">
        <label className="label">
          <span className="label-text capitalize">Product Image</span>
        </label>
        <input
          type="file"
          name="image"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />
      </label>
      <FormSelect name="category" label="Choose Category" list={categories} />
      <FormInput name="name" label="Product Name" type="text" />
      <FormInput name="price" label="Product Price" type="number" />
      <FormInput name="stock" label="Product Stock" type="number" />
      <FormTextArea name="description" label="Product Description" />
      <input
        type="submit"
        value="Add Product"
        className="btn btn-primary btn-block mt-5 btn-md"
      />
    </form>
>>>>>>> b6020ed (first commit)
  );
};

export default CreateProductView;
