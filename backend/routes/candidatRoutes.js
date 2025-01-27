const express = require("express");
const { enregistrerCandidat } = require("../controllers/candidatController");
const router = express.Router();

// Endpoint pour enregistrer un candidat
router.post("/enregistrer", enregistrerCandidat);

module.exports = router;
