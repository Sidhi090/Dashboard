import AuthForm from '@/app/components/Authform';

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <AuthForm type="signup" />
    </div>
  );
}