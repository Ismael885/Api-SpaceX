const express = require("express");

// Creacion del servidor
const app = express();
require("./base-orm/sqlite-init");
app.use(express.json());
const rocketsRouter = require("./routes/rockets");
app.use("", rocketsRouter);

// Control de ruta
app.get("/", (req, res) => {
  res.send("Backend Inicial SpaceX!");
});

// Levantar servidor
const port = 3000;
app.listen(port, () => {
    console.log(`App SpaceX escuchando en el puerto ${port}`);
});