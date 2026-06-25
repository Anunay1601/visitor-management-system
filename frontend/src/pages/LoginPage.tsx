import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useAuthStore, type UserSession } from '@/store/authStore';
import { AuthCard } from '@/features/auth/components/AuthCard';
import { LoginForm } from '@/features/auth/components/LoginForm';
import { RegisterForm } from '@/features/auth/components/RegisterForm';
import { type LoginFields } from '@/features/auth/schemas/authSchemas';

export const LoginPage: React.FC = () => {
  const { loginMutate, isLoading, error } = useAuth();
  const { login: storeLogin } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [isRegister, setIsRegister] = useState(false);

  const isHindi = language === 'hi';
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const handleSubmit = async (data: LoginFields) => {
    // Username field mein user apna full email deta hai (e.g. superadmin@vms.com)
    const email = data.username.trim();
    const success = await loginMutate({ email, password: data.password });
    if (success) {
      const currentUser = useAuthStore.getState().user;
      let targetPath = from;
      if ((targetPath === '/dashboard' || targetPath === '/') && currentUser && ['super_admin', 'support_admin', 'auditor'].includes(currentUser.role)) {
        targetPath = '/super-admin/dashboard';
      }
      navigate(targetPath, { replace: true });
    }
  };



  const getTitle = () => {
    if (isRegister) {
      return isHindi ? 'खाता बनाएं' : 'Create Account';
    }
    return isHindi ? 'स्वागत है' : 'Welcome Back';
  };

  const getDescription = () => {
    if (isRegister) {
      return isHindi
        ? 'अपनी कंपनी पंजीकृत करें और अतिथियों का प्रबंधन शुरू करें।'
        : 'Register your company and start managing visitors.';
    }
    return isHindi
      ? 'जारी रखने के लिए साइन इन करें।'
      : 'Sign in to continue.';
  };



  return (
    <AuthCard
      title={getTitle()}
      description={getDescription()}
      language={language}
      onLanguageChange={setLanguage}
    >
      {isRegister ? (
        <RegisterForm
          onBackToLogin={() => setIsRegister(false)}
          language={language}
        />
      ) : (
        <LoginForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          apiError={error}
          language={language}
          onRegisterToggle={() => setIsRegister(true)}
        />
      )}
    </AuthCard>
  );
};

export default LoginPage;
