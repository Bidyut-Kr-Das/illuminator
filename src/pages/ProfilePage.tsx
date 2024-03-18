import { toast } from 'sonner';
import { removeAccessToken } from '../functions/localStorageAccess.ts';
import usePostReq from '../hooks/usePostReq.ts';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { postData } = usePostReq(`http://localhost:8002/api/v1`);
  const navigate = useNavigate();
  const logout = async () => {
    await postData(`/users/logout`, {});
    removeAccessToken();
    toast.success(`Logged out successfully!`);
    navigate(`/`);
  };
  return (
    <div>
      Profile Page
      <button onClick={logout} className="bg-emerald-500 px-4 rounded-lg">
        Logout
      </button>
    </div>
  );
};
export default ProfilePage;
