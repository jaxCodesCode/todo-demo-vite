import { useState } from "react";
import componentStyles from '@/styles/Login.module.scss'
import { useAuthStore } from "@/authStore";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || '/';
  const [username, setUsername] = useState('');
  const authStore = useAuthStore();
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username) return;
    authStore.login(username);
    setUsername('');
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <div className={componentStyles.formWrapper}>
        <form className={componentStyles.form} onSubmit={handleSubmit}>
          <input type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;