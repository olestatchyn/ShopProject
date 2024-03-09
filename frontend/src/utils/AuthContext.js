import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userRole, setUserRole] = useState(null); // 'user', 'admin', or null


	useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
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
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Імітація API для авторизації
const fakeAuthApi = async ({ username, password }) => {
  // Припустимо, що відправляється запит на сервер і перевіряється username і password
  // Тут лише імітація успішної відповіді
  if (username === 'user' && password === 'password') {
    return { token: 'fake-jwt-token' };
  }
  return { error: 'Неправильний логін або пароль' };
};
