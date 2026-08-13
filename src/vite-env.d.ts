/// <reference types="vite/client" />

// <api111-agenda> é o Web Component do widget de agendamento do CRM (packages/embed-widget no
// monorepo api111-monorepo), carregado via <script async> — ver AgendaWidget.tsx. Sem isto o
// editor acusa tag JSX desconhecida (o projeto não roda tsc no build, mas ajuda no dev).
declare namespace JSX {
  interface IntrinsicElements {
    'api111-agenda': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      professional?: string;
      'client-token'?: string;
      theme?: 'light' | 'dark';
      size?: 'compact' | 'medium' | 'large' | 'split' | 'wizard';
    };
  }
}
