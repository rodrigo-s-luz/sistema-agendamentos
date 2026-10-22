const banco = require("../database/conexao");

function criarUsuario(dadosUsuario) {
  const comando = banco.prepare(`
        INSERT INTO usuarios (
        nome,
        telefone,
        cpf,
        email,
        senha_hash,
        perfil
        )
        VALUES (?, ?, ?, ?, ?, 'cliente')
        `);

  const resultado = comando.run(
    dadosUsuario.nome,
    dadosUsuario.telefone,
    dadosUsuario.cpf,
    dadosUsuario.email,
    dadosUsuario.senhaHash,
  );

  return Number(resultado.lastInsertRowid);
}

module.exports = { criarUsuario };
