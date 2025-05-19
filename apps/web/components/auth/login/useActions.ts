import { useForm } from 'react-hook-form';
import { LoginFormValues, loginSchema } from './login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner'; // 👈 import direct
import { useAuthStore } from '../stores/useAuthStore';
import { useUserStore } from '../../user/stores/useUserSores';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export const useLogin = () => {
  const setToken = useAuthStore(state => state.setToken);
  const setUser = useUserStore(state => state.setUser);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      setLoading(true);
      if (!dataLogin.email || !dataLogin.password) {
        setLoading(false);
        return toast.error('Email et mot de passe requis');
      }

      const { email, password } = dataLogin;
      const res = await signIn('credentials', {
        redirect: false, // on gère la redirection nous-mêmes
        email,
        password,
        callbackUrl: '/dashboard', // où renvoyer en cas de succès
      });

      setLoading(false);

      if (res?.error) {
        setError(res.error);
        return toast.error('Erreur lors de la connexion');
      }

      // const token = data?.login?.token;
      // const user = data?.login?.user;

      // setToken(token || '');
      // setUser(user);

      toast.success(`Connexion réussie 🎉`, {
        description: `Bienvenue! Redirection en cours...`,
      });
      // toast.success(`Connexion réussie 🎉`, {
      //   description: `Bienvenue ${user?.firstName} ! Redirection en cours...`,
      // });

      router.push((res?.url as string) || '/dashboard');
      return res;
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
