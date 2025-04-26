import AuthForm from '@/app/components/Authform';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <AuthForm type="login" />
    </div>
  );
}