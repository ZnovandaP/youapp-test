import * as React from 'react';
import FormAuth, { AuthValueType } from './FormAuth';
import ReminderAuth from './ReminderAuth';

export default function FormRegister() {
  const handleRegister = (values: AuthValueType) => {
    console.table(values);
  };

  return (
    <div className="pl-6 md:p-0 mt-6">
      <h1 className="text-2xl text-left md:mt-0 md:text-4xl md:text-center font-bold">
        Register
      </h1>

      <FormAuth handleSubmit={handleRegister} />

      <ReminderAuth href="/login" label="Have an account?" labelLink="Login Here" />
    </div>
  );
}
