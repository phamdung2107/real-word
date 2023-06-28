import { useState, createContext, useLayoutEffect } from "react";
import { DEFAULT_AUTH, DEFAULT_AUTH_CONTEXT } from "../models/user";
import { getCurrentUser } from "../apis/user";
import Loading from "../components/web/Loading";

export const AuthContext = createContext(DEFAULT_AUTH_CONTEXT);

// Provide Context
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(DEFAULT_AUTH);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const logout = () => {
    setAuth(DEFAULT_AUTH);
    localStorage.removeItem("token");
  };

  const login = (user) => {
    setAuth({ logged: true, user: user });
  };
  const changeProfile = (user) => {
    if (!auth.logged) return;
    setAuth({ logged: true, user });
  };
  const setLocalStorage = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const value = {
    auth,
    logout,
    changeProfile,
    setLocalStorage,
  };

  useLayoutEffect(() => {
    async function fetchUser() {
      try {
        const user = await getCurrentUser();
        login(user.data.user);
      } catch (error) {
        logout();
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    if (token) {
      fetchUser();
    } else {
      logout();
      setLoading(false);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loading heightValue="100vh" sizeValue="xl" /> : children}
    </AuthContext.Provider>
  );
};
