const db = require("../config/db");

const createTelechargement = async (idProspect, idDoc) => {
  const [result] = await db.query(
    "INSERT INTO TELECHARGER (ID_PROSPECT, ID_DOC, DATE_TELECHARGEMENT) VALUES (?, ?, NOW())",
    [idProspect, idDoc]
  );
  return result;
};

module.exports = { createTelechargement };
