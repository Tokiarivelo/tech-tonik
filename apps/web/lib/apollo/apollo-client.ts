import { useAuthStore } from '@/components/auth/stores/useAuthStore';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL, // 👈 ton endpoint NestJS
});

const authLink = setContext((_, { headers }) => {
  // Récupère le token depuis zustand (hors React)
  const token = useAuthStore.getState().token;

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
