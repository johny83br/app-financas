import { LoadingIconLarge } from '@/assets/styles';
import { AuthContext } from '@/contexts/auth';
import AppRoutes from '@/routes/app.router';
import AuthRoutes from '@/routes/auth.router';
import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';

function Routes() {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <LoadingIconLarge>
        <ActivityIndicator size="large" color="#999" />
      </LoadingIconLarge>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
