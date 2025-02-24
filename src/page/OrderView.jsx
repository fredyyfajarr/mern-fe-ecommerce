import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { priceFormat } from '../utils';
import customAPI from '../api';

export const loader = (storage) => async () => {
  const user = storage.getState().userState.user;
  if (!user) {
    toast.warn('Please login! for access this page');
    return redirect('/login');
  }

  let orders;
  if (user.role !== 'owner') {
    const { data } = await customAPI.get('order/current/user');

    orders = data.data;
  } else {
    const { data } = await customAPI.get('order');

    orders = data.data;
  }

  return { orders };
};

const OrderView = () => {
  const { orders } = useLoaderData();
  if (!orders.length) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center p-12 bg-base-200 rounded-xl shadow-xl w-full max-w-2xl mx-4">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Pesanan Anda Masih Kosong
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Silakan mulai berbelanja untuk membuat pesanan
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-primary">Daftar Pesanan</h2>

      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto bg-base-100 rounded-lg shadow-lg">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-4 py-3">No.</th>
              <th className="px-4 py-3">Pemesan</th>
              <th className="px-4 py-3">Produk</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr
                key={item._id}
                className="hover:bg-base-200 transition-colors"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">
                  {item.firstName} {item.lastName}
                </td>
                <td className="px-4 py-3">
                  <ul className="space-y-3">
                    {item.itemsDetail.map((itemProduct) => (
                      <li
                        key={itemProduct.product}
                        className="border-l-4 border-primary pl-3"
                      >
                        <p className="font-semibold">{itemProduct.name}</p>
                        <p className="text-sm text-gray-600">
                          Jumlah: {itemProduct.quantity} produk
                        </p>
                        <p className="text-primary font-medium">
                          {priceFormat(itemProduct.price)}
                        </p>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-3 font-bold">
                  {priceFormat(item.total)}
                </td>
                <td className="px-4 py-3">
                  {item.status === 'pending' ? (
                    <span className="px-3 py-1 rounded-full text-sm bg-info/20 text-info">
                      Pending
                    </span>
                  ) : item.status === 'success' ? (
                    <span className="px-3 py-1 rounded-full text-sm bg-success/20 text-success">
                      Success
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-sm bg-error/20 text-error">
                      Failed
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {orders.map((item, index) => (
          <div key={item._id} className="bg-base-100 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold">Order #{index + 1}</span>
              {item.status === 'pending' ? (
                <span className="px-3 py-1 rounded-full text-sm bg-info/20 text-info">
                  Pending
                </span>
              ) : item.status === 'success' ? (
                <span className="px-3 py-1 rounded-full text-sm bg-success/20 text-success">
                  Success
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full text-sm bg-error/20 text-error">
                  Failed
                </span>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Pemesan:{' '}
                <span className="font-medium">
                  {item.firstName} {item.lastName}
                </span>
              </p>

              <div className="border-t border-b border-gray-200 py-2 my-2">
                <p className="font-medium mb-2">Produk:</p>
                <ul className="space-y-2">
                  {item.itemsDetail.map((itemProduct) => (
                    <li
                      key={itemProduct.product}
                      className="border-l-4 border-primary pl-3"
                    >
                      <p className="font-semibold">{itemProduct.name}</p>
                      <p className="text-sm text-gray-600">
                        Jumlah: {itemProduct.quantity} produk
                      </p>
                      <p className="text-primary font-medium">
                        {priceFormat(itemProduct.price)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="font-medium">Total:</span>
                <span className="font-bold text-primary">
                  {priceFormat(item.total)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderView;
