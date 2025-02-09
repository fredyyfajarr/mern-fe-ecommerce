import { useEffect, useState } from 'react';
import FormInput from '../components/Form/FormInput';
import { useDispatch } from 'react-redux';
import { setUser as setUserRedux } from '../features/userSlice';
import customAPI from '../api';
import { toast } from 'react-toastify';
import { useNavigate, useParams, redirect } from 'react-router-dom';
import Loading from '../components/Loading';

export const loader = (storage) => () => {
  const user = storage.getState().userState.user;
  if (!user) {
    toast.warn('Please login! for access this page');
    return redirect('/login');
  }
  return null;
};

const EditProfileView = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const getUserId = async () => {
    try {
      const { data } = await customAPI.get(`/auth/profile/${id}`);
      setUser(data.user);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to fetch user data');
      navigate(`/profile/${id}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    const { name, email } = formData;

    try {
      const { data } = await customAPI.put(`/auth/profile/${id}`, {
        name,
        email,
      });
      dispatch(setUserRedux(data.data)); // Update Redux state with new user data
      toast.success('Profile updated successfully');
      navigate(`/profile/${id}`);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Update failed');
    }
  };

  useEffect(() => {
    getUserId();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">Edit Profile</h2>

          {user ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                label="Name"
                name="name"
                defaultValue={user.name}
                className="w-full"
              />

              <FormInput
                label="Email"
                name="email"
                type="email"
                defaultValue={user.email}
                className="w-full"
              />

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => navigate(`/profile/${user.name}`)}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProfileView;
