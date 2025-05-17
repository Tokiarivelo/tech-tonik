'use client';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../../../graphql/generated/graphql';
import { LoginFormValues, loginSchema } from './login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner'; // 👈 import direct
import { useAuthStore } from '../stores/useAuthStore';
import { useUserStore } from '../../user/stores/useUserSores';
import { useState } from 'react';

export const useLogin = () => {
  const [mutationLogin, { loading, error }] = useLoginMutation();
  const setToken = useAuthStore(state => state.setToken);
  const setUser = useUserStore(state => state.setUser);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const login = async (dataLogin: LoginFormValues) => {
    try {
      if (!dataLogin.email || !dataLogin.password) {
        return toast.error('Email et mot de passe requis');
      }
      const { data } = await mutationLogin({
        variables: {
          data: dataLogin,
        },
      });

      const token = data?.login?.token;
      const user = data?.login?.user;

      if (!token || !user) {
        return toast.error('Erreur lors de la connexion');
      }

      setToken(token || '');
      setUser(user);

      toast.success(`Connexion réussie 🎉`, {
        description: `Bienvenue ${user?.firstName} ! Redirection en cours...`,
      });

      window.location.href = '/'; // Redirection vers la page d'accueil
      return data;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Une erreur est survenue');
      }
      throw error;
    }
  };
  return {
    login,
    handleShowPassword,
    loading,
    form,
    error,
    showPassword,
  };
};
