const { DatabaseSync } = require("node:sqlite");
const path = require("node:path");

const caminhoBanco = path.join(__dirname, "../../data/agendamentos.db");

const banco = new DatabaseSync(caminhoBanco);

banco.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    telefone TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    senha_hash TEXT NOT NULL,
    perfil TEXT NOT NULL DEFAULT 'cliente'
      CHECK (perfil IN ('cliente', 'administrador')),
    criado_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

module.exports = banco;
