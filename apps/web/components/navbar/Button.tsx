'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { useSession } from 'next-auth/react';

const MyButton = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Vérification en cours…</p>;
  }

  if (session) {
    return (
      <Button variant="outline" className="mr-20 rounded-2xl p-5 font-bold border-none" asChild>
        <Link href="/dashboard" className="text-secondary bg-primary cursor-pointer">
          Dashboard
        </Link>
      </Button>
    );
  }

  return (
    <Button variant="outline" className="mr-20 rounded-2xl p-5 font-bold border-none" asChild>
      <Link href="/login" className="text-secondary bg-primary cursor-pointer">
        Login
      </Link>
    </Button>
  );
};

export default MyButton;
