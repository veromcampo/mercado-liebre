const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  const home = path.join(__dirname, "./views/home.html");
  res.sendFile(home);
});
app.get("/register", (req, res) => {
  const register = path.join(__dirname, "./views/register.html");
  res.sendFile(register);
});
app.get("/login", (req, res) => {
  const login = path.join(__dirname, "./views/login.html");
  res.sendFile(login);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log("El servidor se está ejecutando en el puerto" +port)
);

