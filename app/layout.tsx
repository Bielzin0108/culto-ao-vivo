import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Culto ao Vivo', description: 'Controle de Bíblia, louvores e telão' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="pt-BR"><body>{children}</body></html>; }
