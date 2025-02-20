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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="card bg-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <div className="card-body p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Avatar Section */}
              <div className="avatar">
                <div className="w-32 sm:w-24 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-base-100 hover:scale-105 transition-transform duration-300">
                  <img 
                    src={user.profileImage || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                    alt={user.name}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* User Info Section */}
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                  <h2 className="card-title text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-0">
                    {user.name}
                  </h2>
                  {/* Modified buttons container */}
                  <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-3">
                    <Link 
                      to={`/profile/${user._id}/edit`}
                      className="btn btn-primary w-full sm:w-auto px-6 py-2 text-sm sm:text-base font-medium hover:scale-105 transition-all duration-200 flex items-center justify-center"
                    >
                      <i className="fas fa-edit text-lg sm:mr-2"></i>
                      <span className="hidden sm:inline">Edit Profile</span>
                      <span className="text-lg font-semibold sm:hidden">Edit Profile</span>
                    </Link>
                    <Link 
                      to={`/profile/${user._id}/change-password`}
                      className="btn btn-secondary w-full sm:w-auto px-6 py-2 text-sm sm:text-base font-medium hover:scale-105 transition-all duration-200 flex items-center justify-center"
                    >
                      <i className="fas fa-key text-lg sm:mr-2"></i>
                      <span className="hidden sm:inline">Change Password</span>
                      <span className="text-lg font-semibold sm:hidden">Change Password</span>
                    </Link>
                  </div>
                </div>

                {/* User Details */}
                <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-[100px_20px_auto] gap-2 sm:items-center">
                    <span className="text-gray-600 font-medium">Email</span>
                    <span className="hidden sm:block">:</span>
                    <span className="font-medium text-primary">{user.email}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-[100px_20px_auto] gap-2 sm:items-center">
                    <span className="text-gray-600 font-medium">Role</span>
                    <span className="hidden sm:block">:</span>
                    <span className="font-medium capitalize bg-primary/10 text-primary px-3 py-1 rounded-full inline-block w-fit">
                      {user.role}
                    </span>
                  </div>
                  
                  {/* Stats Card */}
                  <div className="stats shadow-lg bg-white mt-6">
                    <div className="stat">
                      <div className="font-bold stat-title text-gray-600">Member Since</div>
                      <div className="stat-value text-primary text-2xl">2024</div>
                      <div className="font-bold stat-desc">Joined {new Date().toLocaleDateString()}</div>
                    </div>
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
