const formCadastro = document.querySelector("#form-cadastro");
const mensagemCadastro = document.querySelector("#mensagem-cadastro");
const campoConfirmarSenha = document.querySelector("#confirmar-senha");

formCadastro.addEventListener("submit", (evento) => {
  evento.preventDefault();

  mensagemCadastro.textContent = "";

  const dadosCadastro = {
    nome: document.querySelector("#nome").value.trim(),
    telefone: document.querySelector("#telefone").value.trim(),
    cpf: document.querySelector("#cpf").value.trim(),
    email: document.querySelector("#email").value.trim(),
    senha: document.querySelector("#senha").value,
    confirmarSenha: document.querySelector("#confirmar-senha").value,
  };

  if (dadosCadastro.senha !== dadosCadastro.confirmarSenha) {
    mensagemCadastro.textContent = "As senhas não coincidem.";
    document.querySelector("#confirmar-senha").focus();
    return;
  }

  console.log("Dados prontos para validação");
});
