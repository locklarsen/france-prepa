const express = require("express");
const { enregistrerProspect } = require("../controllers/prospectController");
const router = express.Router();

// Endpoint pour enregistrer un prospect
router.post("/enregistrer", enregistrerProspect);

module.exports = router;
