import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import keycloak from '../keycloak';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: string;
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  if (!keycloak.authenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole) {
    const hasRole = keycloak.hasRealmRole(requiredRole);
    if (!hasRole) {
      console.warn('Access denied. User does not have role:', requiredRole);
      console.log('Available roles:', keycloak.realmAccess?.roles);
      return (
        <div className="flex items-center justify-center w-full h-screen bg-red-100">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600">Accès refusé</h1>
            <p className="mt-2 text-red-500">Vous n'avez pas les permissions nécessaires pour accéder à cette page</p>
          </div>
        </div>
      );
    }
  }

  return <>{children}</>;
}
