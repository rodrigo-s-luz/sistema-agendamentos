const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    mensagem: "API do sistema de agendamentos funcionando!",
  });
});

app.listen(port, () => {
  console.log(`Servidor disponível em http://localhost${port}`);
});
