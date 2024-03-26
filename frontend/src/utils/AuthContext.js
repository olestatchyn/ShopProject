import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
	const [userRole, setUserRole] = useState("Admin");


	useEffect(() => {
    const token = localStorage.getItem('authToken');
		const role = localStorage.getItem('userRole');
    if (token) {
      setIsAuthenticated(true);
			setUserRole(role);
    }
  }, []);

  const login = async (username, password) => {
		const response = await fakeAuthApi({ username, password });
		if (response.token) {
			setIsAuthenticated(true);
			setUserRole(response.role);
			localStorage.setItem('authToken', response.token);
			localStorage.setItem('userRole', response.role); 
		}
	};
	
	const logout = () => {
		setIsAuthenticated(false);
		setUserRole(null);
		localStorage.removeItem('authToken');
		localStorage.removeItem('userRole');
	};
	

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const fakeAuthApi = async ({ username, password }) => {
  if (username === 'user' && password === 'password') {
    return { token: 'fake-jwt-token' };
  }
  return { error: 'Неправильний логін або пароль' };
};
