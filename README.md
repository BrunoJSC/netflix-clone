# nextflix

## Descrição

Nextflix é um projeto de aplicativo de streaming desenvolvido com Next.js e NextAuth para autenticação. Utiliza o Prisma como ORM para interação com o banco de dados. O projeto também incorpora componentes do Radix UI, proporcionando uma experiência de usuário rica.

## Pré-requisitos

Certifique-se de ter o Node.js instalado na sua máquina.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nextflix.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nextflix
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute as migrações do Prisma:

   ```bash
   npx prisma migrate dev
   ```

5. Gere os dados iniciais:

   ```bash
   npm run postinstall
   ```

## Configuração

Certifique-se de configurar as variáveis de ambiente necessárias para as integrações, como chaves do NextAuth e outras configurações específicas do seu ambiente.

Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:

```env
NEXTAUTH_URL=http://localhost:3000
# Adicione outras variáveis de ambiente conforme necessário
```

## Uso

### Desenvolvimento

Execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

### Produção

Para construir e iniciar o aplicativo em um ambiente de produção, execute os seguintes comandos:

```bash
npm run build
npm start
```

## Scripts

- `npm run dev`: Inicia o servidor de desenvolvimento do Next.js.
- `npm run build`: Constrói o aplicativo para produção.
- `npm start`: Inicia o aplicativo em um ambiente de produção.
- `npm run lint`: Executa a verificação de linting usando as configurações do Next.js.

## Tecnologias Principais

- Next.js
- NextAuth
- Prisma
- Radix UI
- Tailwind CSS
