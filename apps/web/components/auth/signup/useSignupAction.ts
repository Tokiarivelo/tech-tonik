'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRegisterMutation } from '@/graphql/generated/graphql';
import { useRouter } from 'next/navigation';

const registerSchema = z
  .object({
    firstName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Veuillez entrer une adresse email valide'),
    password: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères'),
    confirmPassword: z.string(),
    username: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export const useRegister = () => {
  const [mutationLogin, { loading, error }] = useRegisterMutation();

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      username: '',
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const register = async (values: RegisterFormValues) => {
    try {
      const { confirmPassword, ...dataInput } = values;
      const { data } = await mutationLogin({
        variables: {
          data: dataInput,
        },
      });

      const user = data?.register?.id;

      if (!user) {
        return toast.error('Erreur lors de la connexion');
      }

      toast.success(`Inscription réussie 🎉`, {
        description: `Votre inscription a été enregistré ! Redirection en cours...`,
      });

      router.replace('/login'); // Redirection vers la page d'accueil
      return data;

      // Redirection ou gestion de la réussite
    } catch (error) {
      toast.error('Erreur lors de la création du compte', {
        description: 'Une erreur est survenue',
      });
    }
  };

  return {
    form,
    loading,
    showPassword,
    register,
    handleShowPassword,
    error,
  };
};
