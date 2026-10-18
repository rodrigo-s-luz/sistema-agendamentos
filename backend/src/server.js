const express = require("express");
const path = require("node:path");

const app = express();
const port = 3000;

const servicos = [
  { id: 1, nome: "Consulta", duracaoMinutos: 30 },
  { id: 2, nome: "Atendimento Inicial", duracaoMinutos: 60 },
];

app.use(express.static(path.join(__dirname, "../../frontend")));

app.get("/servicos", (req, res) => {
  res.json(servicos);
});

app.listen(port, () => {
  console.log(`Servidor disponível em http://localhost${port}`);
});
