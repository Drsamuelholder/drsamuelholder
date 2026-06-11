/**
 * Configuração de rotas do site Dr. Samuel Holder
 * Utiliza React Router v7 no modo Data
 */

import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';

// ══════════════════════════════
// DEFINIÇÃO DAS ROTAS
// ══════════════════════════════

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    // Redireciona qualquer rota desconhecida para Home
    path: '*',
    Component: Home,
  },
]);
