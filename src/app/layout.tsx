import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CarStock - Sistema de Estoque de Veículos',
  description: 'Sistema completo para gestão de estoque de veículos',
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="pt-BR">
      <body className="w-screen h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
