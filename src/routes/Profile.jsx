import { useAuthStore } from "@/authStore";
import componentStyles from '@/styles/Profile.module.scss'

const Profile = () => {
  const { user } = useAuthStore();
  return (
    <div>
      <h1>Profile</h1>
      <div className={componentStyles.profile}>
        <h2>Hello, {user}</h2>
      </div>
    </div>
  )
}

export default Profile;