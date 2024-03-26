import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

export const RequireAuth = ({ children, requiredRole }) => {
  let { isAuthenticated, userRole } = useAuth();
  let location = useLocation();

  if (!isAuthenticated || (requiredRole && userRole !== requiredRole)) {
    return <Navigate to="/about" state={{ from: location }} replace />;
  }

  return children;
};

