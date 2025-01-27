const { createCandidat } = require("../models/candidatModel");
const bcrypt = require("bcrypt");

const enregistrerCandidat = async (req, res) => {
  try {
    const { nom, prenom, email, tel, password } = req.body;

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Enregistrer le candidat
    const idCandidat = await createCandidat({
      nom,
      prenom,
      email,
      tel,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "Candidat enregistré avec succès.", idCandidat });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de l’enregistrement du candidat.", error });
  }
};

module.exports = { enregistrerCandidat };
