const express = require("express");
const { gerarHashSenha } = require("../utils/senha");
const {
  criarUsuario,
  buscarUsuarioPorEmailOuCpf,
} = require("../repositories/usuarios");
const { validarCpf } = require("../utils/validar-cpf");

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

  const cpfNormalizado = cpf.replace(/\D/g, "");

  if (!validarCpf(cpfNormalizado)) {
    return res.status(400).json({
      mensagem: "Informe um CPF válido.",
    });
  }

  const emailNormalizado = email.trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalizado)) {
    return res.status(400).json({
      mensagem: "Informe um e-mail válido.",
    });
  }

  try {
    const usuarioExistente = buscarUsuarioPorEmailOuCpf(
      emailNormalizado,
      cpfNormalizado,
    );

    if (usuarioExistente) {
      return res.status(409).json({
        mensagem: "Já existe uma conta com este e-mail ou CPF.",
      });
    }

    const senhaHash = await gerarHashSenha(senha);

    const id = criarUsuario({
      nome: nome.trim(),
      telefone: telefone.trim(),
      cpf: cpfNormalizado,
      email: emailNormalizado,
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
