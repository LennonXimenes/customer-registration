# customer-registration
Application Documentation: Customer Registration
Description:
The Customer Registration application is a customer registration system supporting multiple associated contacts. It provides the capability to manage customers and their contacts, as well as furnishing detailed reports about the information associated with each client's contacts.

Installation:

Frontend
To run the frontend of the application, follow the steps below:

Prerequisites:

Node.js installed (version 14.x or higher)
npm (Node Package Manager) or yarn installed
Clone the repository:

bash:
git clone [FRONTEND_REPOSITORY_URL]

Install dependencies:
bash:
cd frontend
npm install # or use 'yarn install' if you're using yarn

Run the development server:
bash:
npm run dev # or use 'yarn dev' if you're using yarn

Backend
To run the backend of the application, follow the steps below:

Prerequisites:

Node.js installed (version 14.x or higher)
npm (Node Package Manager) or yarn installed
PostgreSQL database configured and running

Clone the repository:
bash:
git clone [BACKEND_REPOSITORY_URL]

Configure environment variables:
Rename the .env.example file to .env.
Fill in the necessary environment variables in the .env file (such as database information, secret keys, etc.).

Install dependencies:
bash:
cd backend
npm install # or use 'yarn install' if you're using yarn

Run the development server:
bash:
npm run dev # or use 'yarn dev' if you're using yarn

Key Features:

Frontend:
React: Used to build the user interface.
React Router: Management of application routes.
React Hook Form: Used for form handling.
Styled Components: Library for component styling.

Backend:
Express: Framework for building APIs.
TypeORM: ORM (Object-Relational Mapping) for database interaction.
JWT (JSON Web Tokens): Used for authentication and authorization.
bcryptjs: Library for password hashing.
CORS: Configuration of security policies for sharing resources among different origins.

___
Documentação da Aplicação Customer Registration
Descrição:
A aplicação Customer Registration é um sistema de registro de clientes com suporte para múltiplos contatos associados. Ela oferece a capacidade de gerenciar clientes e seus contatos, além de fornecer relatórios detalhados sobre as informações dos contatos vinculados a cada cliente.

Instalação:

Frontend
Para executar o frontend da aplicação, siga os passos abaixo:

Pré-requisitos:

Node.js instalado (versão igual ou superior a 14.x)
npm (Node Package Manager) ou yarn instalado
Clonar o repositório:

bash:
git clone [URL_DO_REPOSITORIO_FRONTEND]

Instalar dependências:
bash:
cd frontend
npm install   # ou use 'yarn install' se estiver usando yarn

Executar o servidor de desenvolvimento:
bash:
npm run dev   # ou use 'yarn dev' se estiver usando yarn


Backend
Para executar o backend da aplicação, siga os passos abaixo:

Pré-requisitos:

Node.js instalado (versão igual ou superior a 14.x)
npm (Node Package Manager) ou yarn instalado
Banco de dados PostgreSQL configurado e rodando

Clonar o repositório:
bash:
git clone [URL_DO_REPOSITORIO_BACKEND]

Configurar as variáveis de ambiente:
Renomeie o arquivo .env.example para .env.
Preencha as variáveis de ambiente necessárias no arquivo .env (como informações de banco de dados, chaves secretas etc.).

Instalar dependências:
bash:
cd backend
npm install   # ou use 'yarn install' se estiver usando yarn

Executar o servidor de desenvolvimento:
bash:
npm run dev   # ou use 'yarn dev' se estiver usando yarn


Funcionalidades Principais:

Frontend:
React: Utilizado para construir a interface do usuário.
React Router: Gerenciamento de rotas na aplicação.
React Hook Form: Utilizado para manipulação de formulários.
Styled Components: Biblioteca para estilização dos componentes.

Backend:
Express: Framework para construção de APIs.
TypeORM: ORM (Object-Relational Mapping) para interação com o banco de dados.
JWT (JSON Web Tokens): Utilizado para autenticação e autorização.
bcryptjs: Biblioteca para hash de senhas.
CORS: Configuração de políticas de segurança para compartilhamento de recursos entre diferentes origens.
