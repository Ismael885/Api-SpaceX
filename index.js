const express = require("express");

// Creacion del servidor
const app = express();

// Control de ruta
app.get("/", (req, res) => {
    res.send("Backend inicial de SpaceX");
})

// Levantar servidor 
const port = 3000;
app.listen(port, () => {
    console.log(`Sitio Web SpaceX escuchando en el puerto ${port}`);
})

