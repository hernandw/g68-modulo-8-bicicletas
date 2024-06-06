import { pool } from "../config/db.js";

export const getBicicletasQuery = async () => {
  try {
    const sql = {
      text: "SELECT * FROM bicicletas",
    };

    const response = await pool.query(sql);
    if (response.rowCount > 0) {
      return response.rows;
    } else {
      return new Error("No hay bicicletas registradas");
    }
  } catch (error) {
    console.log("Error code: ", error.code, "\n", "Message: ", error.message);
  }
};
