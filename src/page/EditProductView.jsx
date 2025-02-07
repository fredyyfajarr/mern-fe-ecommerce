import { useState, useEffect } from 'react';
import { useParams, useNavigate, redirect } from 'react-router-dom';
import customAPI from '../api';
import Loading from '../components/Loading';
import FormInput from '../components/Form/FormInput';
import FormSelect from '../components/Form/FormSelect';
import FormTextArea from '../components/Form/FormTextArea';
import { toast } from 'react-toastify';

export const loader = (store) => async () => {
  const user = await store.getState().userState.user;
  if (!user) {
    toast.warn('Please login! for access this page');
    return redirect('/login');
  }
  if (user.role != 'owner') {
    toast.warn('You are not allowed to access this page');
    return redirect('/');
  }
  return null;
};

const EditProductView = () => {
  const [product, setProduct] = useState(null);
  const categories = ['sepatu', 'baju', 'kemeja', 'celana'];
  const navigate = useNavigate();
  const { id } = useParams();
  const getProductId = async () => {
    const { data } = await customAPI.get(`/product/${id}`);
    setProduct(data.product);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const dataForm = new FormData(form);

    const data = Object.fromEntries(dataForm);
    try {
      // update Product
      await customAPI.put(`/product/${id}`, {
        name: data.name,
        price: data.price,
        stock: data.stock,
        description: data.description,
        category: data.category,
      });

      toast.info('Update Product Success');
      navigate('/products');
    } catch (error) {
      const errorMessage = error?.response?.data?.message;
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    getProductId();
  }, []);
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Edit Produk
        </h2>

        {product ? (
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <FormSelect
                name="category"
                label="Choose Category"
                list={categories}
                defaultValue={product.category}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FormInput
                name="name"
                label="Product Name"
                type="text"
                defaultValue={product.name}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormInput
                name="price"
                label="Product Price"
                type="number"
                defaultValue={product.price}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FormInput
                name="stock"
                label="Product Stock"
                type="number"
                defaultValue={product.stock}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <FormTextArea
              name="description"
              label="Product Description"
              defaultValue={product.description}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
            />

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/products')}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Update Produk
              </button>
            </div>
          </form>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default EditProductView;
