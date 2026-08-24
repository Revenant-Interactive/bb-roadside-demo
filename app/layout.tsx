import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'B&B Roadside LLC | Roadside Assistance Demo',
  description: 'A demo website concept for B&B Roadside LLC serving Manteno, Aurora, Joliet, and nearby communities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
