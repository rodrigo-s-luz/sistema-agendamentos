# Sistema de Agendamentos

Projeto pessoal para praticar programação, principalmente operações
de criação, consulta, atualização e exclusão de dados (CRUD).

## Objetivo

Permitir o gerenciamento de serviços, profissionais, clientes e
agendamentos de um estabelecimento prestador de serviços.

O MVP atenderá um estabelecimento, considerando expansão futura
para diferentes negócios.

## Tecnologias previstas

- HTML
- CSS
- JavaScript
- Node.js com Express
- PostgreSQL
- Git e GitHub

## Funcionalidades do MVP

- Cadastro e login de clientes.
- Gerenciamento de clientes, profissionais e serviços.
- Associação de serviços aos profissionais.
- Configuração de horários semanais de atendimento, com intervalos.
- Criação, consulta, reagendamento e cancelamento de agendamentos.
- Consulta da agenda por data e profissional.
- Prevenção de conflitos de horários.

## Regras iniciais

- O administrador gerencia os cadastros e todos os agendamentos.
- Clientes acessam e alteram apenas seus próprios agendamentos.
- Cada agendamento possui um cliente, um profissional e um serviço.
- Cada serviço possui duração fixa em minutos.
- Os horários de início são oferecidos a cada 15 minutos.
- O atendimento inteiro deve caber na disponibilidade do profissional.
- Agendamentos ativos do mesmo profissional não podem se sobrepor.
- Cancelamentos e reagendamentos são permitidos antes do início.
- O cancelamento mantém o histórico e libera o horário.
- Registros vinculados ao histórico são inativados quando necessário.

## Fora do escopo inicial

- Gerenciamento de vários estabelecimentos.
- Cadastro de animais e prontuários.
- Pagamentos.
- Integração com WhatsApp e outros sistemas.
- Feriados, férias e bloqueios excepcionais.

## Situação do projeto

Backend inicial configurado com Express e uma rota de verificação.
Os cadastros, a autenticação e a conexão com o banco ainda não foram implementados.

## Como executar o backend

Pré-requisitos: Node.js e npm instalados.

1. Abra o terminal na raiz do projeto.
2. Entre na pasta do backend: `cd backend`
3. Instale as dependências: `npm install`
4. Inicie o servidor: `npm start`
5. Acesse http://localhost:3000 no navegador.

Para encerrar o servidor, pressione Ctrl + C no terminal.
