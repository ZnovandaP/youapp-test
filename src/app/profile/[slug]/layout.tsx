import * as React from 'react';

type ProfileProps = {
  children: React.ReactNode
};

export default function layout({ children }: ProfileProps) {
  return (
    <div>
      hallo
      {children}
    </div>
  );
}
