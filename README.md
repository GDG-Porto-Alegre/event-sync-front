# EventSync GDG

## Descrição

**EventSync** é uma aplicação frontend desenvolvida para gerenciar eventos. Com esta aplicação, você pode criar, editar, visualizar e deletar eventos facilmente. Este projeto é construído usando **Vite**, **React**, e **TypeScript** para garantir uma experiência de desenvolvimento rápida e segura.

## Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca para construção de interfaces de usuário
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento de formulários de forma simples e eficiente
- [TypeScript](https://www.typescriptlang.org/) - Superconjunto do JavaScript que adiciona tipagem estática
- [Zod](https://zod.dev/) - Biblioteca para validação de esquemas e dados
- [Tailwind CSS](https://tailwindcss.com/) - Framework utilitário para estilização rápida e responsiva
- [Vite](https://vitejs.dev/) - Ferramenta de build rápida e moderna
- [Vitest](https://vitest.dev/) - Teste unitário com foco em velocidade e integração com Vite
- [Shadcn](https://ui.shadcn.com/) - Componentes de interface de usuário acessíveis e estilizados com Tailwind CSS
- [TanStack Router](https://tanstack.com/router/latest) - O TanStack Router é uma biblioteca de roteamento para aplicações React.
- [Forgedev/eslint-config](https://www.npmjs.com/package/@forgedev-br/eslint-config) - Configuração personalizada de eslint/prettier
- [Storybook](https://storybook.js.org/) - Ferramenta para desenvolvimento de componentes de UI de forma isolada
- [Clerk](https://clerk.com/) - Autenticação e gerenciamento de usuários para aplicações web

## Requisitos

- Node.js >= 20.x
- [pnpm](https://pnpm.io/)
Caso esteja usando [nvm](https://github.com/nvm-sh/nvm) ou [fnm](https://github.com/Schniz/fnm), rode o comando `nvm use` ou `fnm use` para baixar a versão fixada no projeto.

## Instalação

1. Clone o repositório:
```bash
   git clone https://github.com/GDG-Porto-Alegre/event-sync-front.git
```

Se estiver usando a CLI do GitHub, execute:

```bash
  gh repo clone GDG-Porto-Alegre/event-sync-front
```

2. Navegue até o diretório do projeto:

```bash
  cd event-manager
```

3. Instale as dependências:

```bash
  pnpm install
```
## Executando a Aplicação

Para iniciar a aplicação em ambiente de desenvolvimento, execute:

```bash
  pnpm dev
```

O projeto será iniciado em http://localhost:3000.

## Scripts Disponíveis

- dev: Inicia o servidor de desenvolvimento.
- build: Gera a versão de produção do projeto.
- lint: Executa o ESLint para verificar problemas de código.
- test: Roda os testes.

## Estrutura de Diretórios

```text
.
├── .storybook              # Configuração Storybook
├── public                  # Arquivos estáticos
├── src
│   ├── app
│   │   ├── hooks           # Custom hooks
│   │   ├── lib             # libs
│   │   ├── schemas         # Schemas de validação
│   │   ├── types           # Tipagem
│   │   └── utils           # Utilidades
│   ├── assets              # Arquivos de mídia e estilos
│   ├── components          # Componentes reutilizáveis
│   │   └── app             # Componentes com alguma lógica
│   │   └── ui              # Componentes "burros"
│   ├── pages               # Páginas da aplicação
│   ├── routes              # Controle de rotas
│   ├── stories             # Arquivos iniciais do Storybook
│   ├── style               # Estilização
│   ├── main.tsx            # Ponto de entrada
│   └── route-tree.gen.tsx  # Gerador de routes
├── README.md
├── components.json         # Configuração ShadcnUi
├── postcss.config.js       # Configuração postcss
├── tailwind.config.js      # Configuração Tailwind
├── tsconfig.app.json       # Configuração tsconfig-vite
├── tsconfig.json           # Configuração tsconfig-vite
├── tsconfig.node.json      # Configuração tsconfig-vite
└── vite.config.ts          # Configuração do Vite
```

## Contribuição

Contribuições são bem-vindas! Por favor, siga as guidelines de contribuição e crie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Extensões recomendadas

Ambas estão listadas nas recomendações do Workspace.

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) Integrates ESLint JavaScript into VS Code.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) Intelligent Tailwind CSS tooling for VS Code

---

Feito com ❤️ por [GDG Porto Alegre](https://github.com/GDG-Porto-Alegre).
