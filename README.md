<div align="center">
  <img src="./CleanArchitecture.jpg" width="500px" />
  <div>
    <img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" width="60px" />
    <img src="https://avatars.githubusercontent.com/u/119793569?s=200&v=4"" width="60px" />
  </div>
  <h1>Criando API com Bun usando Clean Architecture e Ports and Adapters</h1>
</div>

## Estrutura do projeto

```bash
src
├── adapters # Camada de adaptadores
│   └── user
│       ├── FindUserEmailController.ts
│       └── RegisterUserController.ts
├── core # Camada de regras de negócio
│   ├── shared
│   │   └── IUserCase.ts
│   └── user
│       ├── model
│       │   └── IUser.ts
│       └── service
│           ├── FindUserEmail.ts
│           ├── IRepositoryUser.ts
│           └── RegisterUser.ts
├── external # Camada de serviços externos
│   ├── memory
│   │   └── RepositoryUserMemory.ts
│   └── prisma
│       ├── migrations
│       │   ├── 20230923003356_init_table
│       │   │   └── migration.sql
│       │   └── migration_lock.toml
│       ├── RepositoryUserPrisma.ts
│       └── schema.prisma
└── index.ts
```

## Sobre o projeto

Este projeto tem como objetivo criar uma API usando o toolkit bun e framework Elysia. A arquitetura utilizada é a Clean Architecture e Ports and Adapters.

## Tecnologias utilizadas

- [Bun](https://bun.sh)
- [Elysia](https://elysiajs.com)
- [Typescript](https://www.typescriptlang.org)
- [Prisma](https://www.prisma.io)

## Como executar o projeto

```bash
# clonar repositório
git clone https://github.com/walber-vaz/backend-bun-clean-architecture.git

# entrar na pasta do projeto
cd clean-architecture-bun

# instalar dependências
bun install

# executar o projeto
bun run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```

## Autor

- [Walber Vaz](https://www.linkedin.com/in/walber-vaz/)

## Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
