function validarCpf(cpf) {
  if (!/^\d{11}$/.test(cpf)) {
    return false;
  }

  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  for (let tamanho = 9; tamanho <= 10; tamanho += 1) {
    let soma = 0;

    for (let indice = 0; indice < tamanho; indice += 1) {
      soma += Number(cpf[indice]) * (tamanho + 1 - indice);
    }

    const resto = soma % 11;
    const digitoEsperado = resto < 2 ? 0 : 11 - resto;

    if (Number(cpf[tamanho]) !== digitoEsperado) {
      return false;
    }
  }

  return true;
}

module.exports = { validarCpf };
