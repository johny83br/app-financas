import api from '@/services/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext<{
  signed: boolean;
  user: { id: string; name: string; email: string } | null;
  loadingAuth: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  signUp: (email: string, password: string, name: string) => void;
}>({
  signed: false,
  user: null,
  loadingAuth: false,
  loading: true,
  signIn: () => null,
  signOut: () => null,
  signUp: () => null,
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ id: string; name: string; email: string } | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage() {
      const token = await AsyncStorage.getItem('@token');

      if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        try {
          const response = await api.get('/me');

          setUser(response.data);
          setLoading(false);
        } catch (error) {
          console.error('ERRO AO CARREGAR USUÁRIO: ', error);
          await AsyncStorage.removeItem('@token');
          setUser(null);
        }
      }

      setLoading(false);
    }

    loadStorage();
  }, [navigation]);

  async function signUp(email: string, password: string, name: string) {
    setLoadingAuth(true);

    try {
      await api.post('/users', {
        email,
        password,
        name,
      });

      setLoadingAuth(false);
      navigation.goBack();
    } catch (error) {
      console.error('ERRO AO CADASTRAR: ', error);
      setLoadingAuth(false);
    }
  }

  async function signIn(email: string, password: string) {
    setLoadingAuth(true);

    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      const { id, name, token } = response.data;

      await AsyncStorage.setItem('@token', token);

      setUser({ id, name, email });
      setLoadingAuth(false);
    } catch (error) {
      console.error('ERRO AO FAZER LOGIN: ', error);
      setLoadingAuth(false);
    }
  }

  async function signOut() {
    await AsyncStorage.clear()
      .then(() => {
        setUser(null);
      })
      .catch(error => {
        console.error('ERRO AO FAZER LOGOUT: ', error);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signUp: (email, password, name) => {
          signUp(email, password, name);
        },
        signIn: (email, password) => {
          signIn(email, password);
        },
        signOut,
        signed: !!user,
        user,
        loadingAuth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;