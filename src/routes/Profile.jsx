import Header from "@/components/Header";
import { useAuthStore } from "@/stores/authStore";
import componentStyles from '@/styles/Profile.module.scss'

const Profile = () => {
  const { user } = useAuthStore();
  return (
    <div>
      <Header>
        <h1>Profile</h1>
      </Header>
      <div className={componentStyles.profile}>
        <h2>Hello, {user}</h2>
      </div>
    </div>
  )
}

export default Profile;