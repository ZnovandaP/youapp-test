import * as React from 'react';

type ProfileProps = {
  params: {
    slug: string
  }
};

export default function ProfilePage({ params }: ProfileProps) {
  return (
    <div>
      page component
    </div>
  );
}
