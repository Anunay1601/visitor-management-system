import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { routesConfig } from './routesConfig';
import { useAuthStore } from '@/store/authStore';

import { LoginPage } from '@/pages/LoginPage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage';
import { OTPVerificationPage } from '@/pages/OTPVerificationPage';
import { UnauthorizedPage } from '@/pages/UnauthorizedPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import LandingPage from '@/pages/LandingPage';

const RootRedirect: React.FC = () => {
  const { user } = useAuthStore();
  if (user && ['super_admin', 'support_admin', 'auditor'].includes(user.role)) {
    return <Navigate to="/super-admin/dashboard" replace />;
  }
  if (user && user.role === 'receptionist') {
    return <Navigate to="/check-in" replace />;
  }
  return <Navigate to="/dashboard" replace />;
};

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Public Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Public Authentication pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/verify-otp" element={<OTPVerificationPage />} />

          {/* Fallback Access Denied page */}
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

          {/* Protected nested dashboard views */}
          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            {/* Keep default redirection logic for /dashboard or root if accessed authenticated */}
            <Route path="/home" element={<RootRedirect />} />

            {/* Map out manifest items requiring dashboard framing and route protection */}
            {routesConfig
              .filter((route) => route.layout === 'dashboard')
              .map((route) => {
                const LazyComponent = route.component;
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <ProtectedRoute allowedRoles={route.allowedRoles}>
                        <LazyComponent />
                      </ProtectedRoute>
                    }
                  />
                );
              })}
          </Route>

          {/* Route not found fallbacks */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
