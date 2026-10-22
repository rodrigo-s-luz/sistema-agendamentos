const express = require("express");
const { gerarHashSenha } = require("../utils/senha");
const { criarUsuario } = require("../repositories/usuarios");

const router = express.Router();

router.post("/", async (req, res) => {
  const { nome, telefone, cpf, email, senha } = req.body ?? {};

  const campos = [nome, telefone, cpf, email, senha];

  const preenchimentoInvalido = campos.some(
    (campo) => typeof campo !== "string" || campo.trim() === "",
  );

  if (preenchimentoInvalido) {
    return res.status(400).json({
      mensagem: "Preencha todos os campos obrigatórios.",
    });
  }

  try {
    const senhaHash = await gerarHashSenha(senha);

    const id = criarUsuario({
      nome: nome.trim(),
      telefone: telefone.trim(),
      cpf: cpf.trim(),
      email: email.trim().toLowerCase(),
      senhaHash,
    });

    return res.status(201).json({
      mensagem: "Cadastro realizado com sucesso.",
      id,
    });
  } catch (erro) {
    console.error("Falha ao cadastrar usuário:", erro.code);

    return res.status(500).json({
      mensagem: "Não foi possível realizar o cadastro.",
    });
  }
});

module.exports = router;
