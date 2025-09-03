import { Header } from '@/src/components/layout/header';
import { Footer } from '@/src/components/layout/footer';
import { LoginForm } from '@/src/components/auth/login-form';

export default function LoginPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='flex-1 flex items-center justify-center py-12 px-4'>
        <LoginForm />
      </main>

      <Footer />
    </div>
  );
}
