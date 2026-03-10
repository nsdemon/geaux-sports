import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Geaux Sports | LSU Tigers',
  description: 'Upcoming LSU games and 2026 scores',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
