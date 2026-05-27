import './globals.css';

export const metadata = {
  title: 'Blumen | Flores para graduaciones',
  description: 'Ramos y arreglos florales para graduaciones, regalos y momentos especiales.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
