import * as React from 'react';
import FormAuth, { AuthValueType } from './FormAuth';
import ReminderAuth from './ReminderAuth';

export default function FormLogin() {
  const handleLogin = (values: AuthValueType) => {
    console.table(values);
  };

  return (
    <div className="pl-6 md:p-0 mt-6">
      <h1 className="text-2xl text-left md:mt-0 md:text-4xl md:text-center font-bold">
        Login
      </h1>

      <FormAuth handleSubmit={handleLogin} />

      <ReminderAuth href="/register" label="Have an account?" labelLink="Register Here" />
    </div>
  );
}
