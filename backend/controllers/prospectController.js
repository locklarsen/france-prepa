const { createProspect } = require("../models/prospectModel");
const { createTelechargement } = require("../models/telechargerModel");

const enregistrerProspect = async (req, res) => {
  try {
    const { nom, prenom, email, tel, idDoc } = req.body;

    // Créer le prospect
    const idProspect = await createProspect({ nom, prenom, email, tel });

    // Créer le téléchargement
    await createTelechargement(idProspect, idDoc);

    res.status(201).json({ message: "Prospect enregistré avec succès." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de l’enregistrement du prospect.", error });
  }
};

module.exports = { enregistrerProspect };
