# EventSync GDG

## Descrição

**EventSync** é uma aplicação frontend desenvolvida para gerenciar eventos. Com esta aplicação, você pode criar, editar, visualizar e deletar eventos facilmente. Este projeto é construído usando **Vite**, **React**, e **TypeScript** para garantir uma experiência de desenvolvimento rápida e segura.

## Funcionalidades

- ⁠Cadastro de eventos (via Google Calendar)
- ⁠Visualização de eventos (lista)
- ⁠Campos
  - Presencial/online
  - Lugar/link
  - Data: início / fim
  - Hora: início / fim
  - Categorias
    - Meetup
    - Evento
    - Workshop
    - Painel
    - Encontro


## Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca para construção de interfaces de usuário
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento de formulários de forma simples e eficiente
- [TypeScript](https://www.typescriptlang.org/) - Superconjunto do JavaScript que adiciona tipagem estática
- [Zod](https://zod.dev/) - Biblioteca para validação de esquemas e dados
- [Tailwind CSS](https://tailwindcss.com/) - Framework utilitário para estilização rápida e responsiva
- [Vite](https://vitejs.dev/) - Ferramenta de build rápida e moderna
- [Vitest](https://vitest.dev/) - Teste unitário com foco em velocidade e integração com Vite
- [Shadcn](https://ui.shadcn.com/) - Componentes de interface de usuário acessíveis e estilizados com Tailwind CSS
- [Forgedev/eslint-config](https://www.npmjs.com/package/@forgedev-br/eslint-config) - Configuração personalizada de eslint/prettier
- [Storybook](https://storybook.js.org/) - Ferramenta para desenvolvimento de componentes de UI de forma isolada
- [Clerk](https://clerk.com/) - Autenticação e gerenciamento de usuários para aplicações web


## Requisitos

- Node.js >= 20.x
- npm >= 10.x (ou [pnpm](https://pnpm.io/))

## Instalação

1. Clone o repositório:
```bash
   git clone https://github.com/GDG-Porto-Alegre/event-sync-front.git
```

2. Navegue até o diretório do projeto:

```bash
  cd event-manager
```

3. Instale as dependências:

```bash
  npm install
  # ou
  pnpm install
```
## Executando a Aplicação
Para iniciar a aplicação em ambiente de desenvolvimento, execute:

```bash
  npm run dev
  # ou
  pnpm dev
```

O projeto será iniciado em http://localhost:5173.

## Scripts Disponíveis

- dev: Inicia o servidor de desenvolvimento.
- build: Gera a versão de produção do projeto.
- lint: Executa o ESLint para verificar problemas de código.
- format: Formata o código usando Prettier.

## Estrutura de Diretórios

```text
├── public/         # Arquivos estáticos
├── src/
│   ├── assets/     # Arquivos de mídia e estilos
│   ├── components/ # Componentes reutilizáveis
│   ├── hooks/      # Custom hooks
│   ├── pages/      # Páginas da aplicação
│   ├── store/      # Configuração do Zustand
│   ├── types/      # Tipos TypeScript
│   ├── utils/      # Utilitários e helpers
│   ├── App.tsx     # Componente principal
│   └── main.tsx    # Ponto de entrada
└── vite.config.ts  # Configuração do Vite
```

## Contribuição

Contribuições são bem-vindas! Por favor, siga as guidelines de contribuição e crie um pull request.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Feito com ❤️ por [GDG Porto Alegre](https://github.com/GDG-Porto-Alegre).