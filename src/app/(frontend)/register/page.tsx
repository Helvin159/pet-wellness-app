import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { RegisterForm } from '@/modules/users/components/auth/register-form'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <RegisterForm />
      </main>

      <Footer />
    </div>
  )
}
