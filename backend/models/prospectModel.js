const db = require("../config/db");

const createProspect = async (prospect) => {
  const { nom, prenom, email, tel } = prospect;
  const [result] = await db.query(
    "INSERT INTO PROSPECTS (NOM_PROSPECT, PRENOM_PROSPECT, EMAIL_PROSPECT, TEL_PROSPECT) VALUES (?, ?, ?, ?)",
    [nom, prenom, email, tel]
  );
  return result.insertId;
};

module.exports = { createProspect };
