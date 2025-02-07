import FormInput from '../components/Form/FormInput';
import customAPI from '../api';
import { toast } from 'react-toastify';
import { useNavigate, useParams, redirect } from 'react-router-dom';

export const loader = (storage) => () => {
  const user = storage.getState().userState.user;
  if (!user) {
    toast.warn('Please login! for access this page');
    return redirect('/login');
  }
  return null;
};

const EditPasswordProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    const { oldPassword, newPassword } = formData;

    try {
      await customAPI.put(`/auth/profile/${id}/change-password`, {
        oldPassword,
        newPassword,
      });
      toast.success('Password updated successfully');
      navigate(`/profile/${id}`);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Password update failed');
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">Change Password</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Current Password"
              name="oldPassword"
              type="password"
              className="w-full"
              required
            />

            <FormInput
              label="New Password"
              name="newPassword"
              type="password"
              className="w-full"
              required
            />

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate('/profile')}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPasswordProfile;
