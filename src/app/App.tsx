/**
 * Componente raiz da aplicação Dr. Samuel Holder
 * Configura o React Router com o RouterProvider
 */

import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}
