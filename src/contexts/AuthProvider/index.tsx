import router from "next/router";
import React, { useEffect, useState } from "react";
import { api } from "@/actions/api";

// Hooks
const AuthContext = React.createContext<IContext>({} as IContext);

interface IUser {
  name: string;
  username: string;
}

// Types
import { IAuthProvider, IContext } from "./types";
import { LoginRequest, setUserLocalStorage } from "./utils";
import { hash } from "@/constants";

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser>();
  
  async function authenticate(username: string) {
    const user = await LoginRequest(username);

    setUser(user);

    if (user) {
      setUserLocalStorage(user);
      router.push('/home');
    } else {
      router.push('/login');
    }
  }

  function logout() {
    setUser({
      name: '',
      username: '',
    });
    localStorage.clear();
    router.push('/login');
  }

  useEffect(() => {
    if (window) {
      const tokenExists = localStorage.getItem('app.token');
      console.log(tokenExists);
      if(!tokenExists || tokenExists !== hash) {
        router.push('/login');
      }

      router.push('/home');
    }
  }, []);


  return (
    <AuthContext.Provider
      value={{
        authenticate,
        logout,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
