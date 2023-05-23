import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
