import * as React from 'react';
import FormLogin from '../components/FormLogin';
import AuthWrapper from '../components/AuthWrapper';

export default function Login() {
  return (
    <AuthWrapper>
      <FormLogin />
    </AuthWrapper>
  );
}
