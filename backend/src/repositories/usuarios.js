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

function buscarUsuarioPorEmailOuCpf(email, cpf) {
  const comando = banco.prepare(`
    SELECT id
    FROM usuarios
    WHERE email = ? OR cpf = ?
    LIMIT 1
  `);

  return comando.get(email, cpf);
}

module.exports = { criarUsuario, buscarUsuarioPorEmailOuCpf };
