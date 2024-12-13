"use client";
import * as React from 'react';
import { useState } from 'react';
import { UserContextType } from '../userProvider/types';
import {user} from '../../types/zod/index'

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = React.createContext<UserContextType>(
  {} as UserContextType
);
export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("@teste:user") || "{}")
      );
      const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("@teste:token") || "{}")
      );
      const [isAuth, setIsAuth] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,setUser, token, setToken,isAuth,setIsAuth
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
