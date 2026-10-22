const argon2 = require("argon2");

async function gerarHashSenha(senha) {
  const hash = await argon2.hash(senha);
  return hash;
}

module.exports = { gerarHashSenha };
