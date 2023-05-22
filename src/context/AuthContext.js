import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
const AuthContext = createContext({
  isLoggedIn: false,
  toggleLoginStatus: () => {}
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        toggleLoginStatus
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
