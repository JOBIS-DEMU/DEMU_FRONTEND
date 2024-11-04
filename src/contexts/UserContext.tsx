import { createContext, useContext, useState, ReactNode } from 'react';
import UserModel from '../models/user';
import UserService from '../services/userService';

interface UserContextType {
  user: UserModel | null;
  setUser: (user: UserModel | null) => void;
  refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserModel | null>(null);

  const refreshUser = async () => {
    await UserService.get((userData) => {
      setUser(userData);
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
} 