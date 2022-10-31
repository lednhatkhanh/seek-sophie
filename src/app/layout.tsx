import * as React from 'react';
import 'src/styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen h-screen bg-slate-100 flex items-center justify-center">
      {children}
    </main>
  );
}
