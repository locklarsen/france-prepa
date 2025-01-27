const db = require("../config/db");

const createCandidat = async (candidat) => {
  const { nom, prenom, email, tel, password } = candidat;
  const [result] = await db.query(
    "INSERT INTO CANDIDATS (NOM_CANDIDAT, PRENOM_CANDIDAT, EMAIL_CANDIDAT, TEL_CANDEIDAT, PWD_CANDIDAT) VALUES (?, ?, ?, ?, ?)",
    [nom, prenom, email, tel, password]
  );
  return result.insertId;
};

module.exports = { createCandidat };
