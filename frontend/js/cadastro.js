const formCadastro = document.querySelector("#form-cadastro");
const mensagemCadastro = document.querySelector("#mensagem-cadastro");
const campoConfirmarSenha = document.querySelector("#confirmar-senha");
const campoCpf = document.querySelector("#cpf");

formCadastro.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  mensagemCadastro.textContent = "";
  campoConfirmarSenha.removeAttribute("aria-invalid");

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
    campoConfirmarSenha.setAttribute("aria-invalid", "true");
    campoConfirmarSenha.focus();
    return;
  }

  try {
    const resposta = await fetch("/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: dadosCadastro.nome,
        telefone: dadosCadastro.telefone,
        cpf: dadosCadastro.cpf,
        email: dadosCadastro.email,
        senha: dadosCadastro.senha,
      }),
    });

    const resultado = await resposta.json();

    mensagemCadastro.textContent = resultado.mensagem;

    if (!resposta.ok) {
      return;
    }

    mensagemCadastro.classList.add("sucesso");

    formCadastro.reset();
  } catch (erro) {
    mensagemCadastro.textContent =
      "Não foi possível concluir o cadastro. Verifique a conexão e tente novamente.";
  }
});

campoCpf.addEventListener("input", () => {
  const numeros = campoCpf.value.replace(/\D/g, "").slice(0, 11);

  const cpfFormatado = numeros
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");

  campoCpf.value = cpfFormatado;
});
