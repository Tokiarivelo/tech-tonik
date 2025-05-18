import { useAuthStore } from '@/components/auth/stores/useAuthStore';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = useAuthStore.getState().token;

  console.log('token :>> ', token);

  // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Si connecté, continuer vers la page demandée
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};
