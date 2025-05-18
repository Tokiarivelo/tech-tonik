'use client';

import TheEndAnimation from '@/components/logo/TheEndAnimation';
import { useLogin } from './useActions';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { EyeIcon, EyeOffIcon, KeyIcon, MailIcon } from 'lucide-react';

export const Login = () => {
  const { form, loading, showPassword, login, handleShowPassword } = useLogin();
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <div>
        <TheEndAnimation />
      </div>
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <Form {...form}>
        <div>
          <div className="mb-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-red"
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                      startOrnerIcon={
                        <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    Mot de passe
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      {...field}
                      startOrnerIcon={
                        <KeyIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      }
                      endOrnerIcon={
                        <div className="cursor-pointer">
                          {showPassword ? (
                            <EyeIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                              onClick={handleShowPassword}
                            />
                          ) : (
                            <EyeOffIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                              onClick={handleShowPassword}
                            />
                          )}
                        </div>
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="cursor-pointer w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
            type="submit"
            disabled={loading}
            variant={'destructive'}
            onClick={form.handleSubmit(login)}
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
