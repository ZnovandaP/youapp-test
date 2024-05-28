import * as React from 'react';
import FormRegister from '../components/FormRegister';
import AuthWrapper from '../components/AuthWrapper';

export default function Register() {
  return (
    <AuthWrapper>
      <FormRegister />
    </AuthWrapper>
  );
}
