import * as React from 'react';
import FormCreateProfile from './components/FormCreateProfile';

export default function CreateProfile() {
  return (
    <div className="p-0 md:px-8 lg:p-6 rounded-lg lg:ring-1 lg:ring-teal-400/40 lg:bg-white/10 lg:backdrop-blur-xl w-full lg:w-[50%]">
      <FormCreateProfile />
    </div>
  );
}
