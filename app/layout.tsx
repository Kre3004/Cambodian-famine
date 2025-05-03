// app/layout.tsx
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <h1>My Site</h1>
      </header>
      <main>{children}</main>
      <footer>My Footer</footer>
    </div>
  );
};

export default Layout;
