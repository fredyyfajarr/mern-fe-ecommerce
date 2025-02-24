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
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  // Fetch user data
  const getUserId = async () => {
    try {
      const { data } = await customAPI.get(`/auth/profile/${id}`);
      setUser(data.user);
      setImagePreview(data.user.profile_image);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to fetch user data');
      navigate(`/profile/${id}`);
    }
  };

  useEffect(() => {
    getUserId();
  }, []);

  // Handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      // Kirim FormData langsung ke backend tanpa request upload terpisah
      const { data } = await customAPI.put(`/auth/profile/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      dispatch(setUserRedux(data.data));
      toast.success('Profile updated successfully');
      navigate(`/profile/${id}`);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Update failed');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl mb-6">
            Edit Your Profile
          </h2>

          {user ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Profile Image Upload */}
              <div className="form-control w-full">
                <div className="flex flex-col items-center gap-4">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={imagePreview || user.profile_image}
                        alt={user.name}
                      />
                    </div>
                  </div>
                  <input
                    type="file"
                    name="profile_image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                  />
                </div>
              </div>

              {/* Existing form inputs */}
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

              {/* Existing buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => navigate(`/profile/${id}`)}
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
