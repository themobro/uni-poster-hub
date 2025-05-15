
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  googleLogin: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  const login = async (email: string, password: string) => {
    // Simulate login request
    console.log('Logging in with:', email, password);
    
    // Mock successful login
    if (email.endsWith('@uni-bielefeld.de') && password) {
      setUser({
        id: '123',
        name: 'Student User',
        email: email,
        profilePicture: 'https://i.pravatar.cc/150?u=user123',
      });
    } else {
      throw new Error('Invalid credentials or non-university email');
    }
  };
  
  const logout = () => {
    setUser(null);
  };
  
  const googleLogin = async () => {
    // Simulate Google login
    console.log('Logging in with Google');
    
    // Mock successful Google login
    setUser({
      id: '456',
      name: 'Google User',
      email: 'student@uni-bielefeld.de',
      profilePicture: 'https://i.pravatar.cc/150?u=google456',
    });
  };
  
  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    googleLogin,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
