import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

export const loader = (storage) => () => {
  const user = storage.getState().userState.user;
  if (!user) {
    toast.warn('Please login! for access this page');
    return redirect('/login');
  }
  return null;
};

const ProfileView = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-start gap-6">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title text-2xl">{user.name}</h2>
                <div className="flex flex-col gap-2">
                  <button className="btn btn-primary btn-sm">
                    <Link to={`/profile/${user._id}/edit`}>Edit Profile</Link>
                  </button>
                  <button className="btn btn-secondary btn-sm">
                    <Link to={`/profile/${user._id}/change-password`}>
                      Change Password
                    </Link>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-[80px_20px_auto] items-center">
                  <span className="text-base-content/60">Email</span>
                  <span>:</span>
                  <span className="font-medium">{user.email}</span>
                </div>
                <div className="grid grid-cols-[80px_20px_auto] items-center">
                  <span className="text-base-content/60">Role</span>
                  <span>:</span>
                  <span className="font-medium">{user.role}</span>
                </div>
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">Member Since</div>
                    <div className="stat-value">2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
