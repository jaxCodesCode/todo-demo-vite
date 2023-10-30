import { useAuthStore } from "@/stores/authStore";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();
  const location = useLocation();
  
  if (!user) {
    return (
      <Navigate to='/login'
        state={{ pathname: location.pathname }}
        replace/>
    )
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.object
}

export default ProtectedRoute;