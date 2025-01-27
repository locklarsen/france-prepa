const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const prospectRoutes = require("./routes/prospectRoutes");
const candidatRoutes = require("./routes/candidatRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use("/api/prospects", prospectRoutes);
app.use("/api/candidats", candidatRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
