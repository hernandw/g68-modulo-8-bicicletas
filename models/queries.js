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

export const addBicicletasQuery = async ( marca, modelo, precio, stock ) => {
  try {
    const sql = {
      text: "INSERT INTO bicicletas (marca, modelo, precio, stock) VALUES ($1, $2, $3, $4) RETURNING *",
      values: [marca, modelo, precio, stock],
    }; 
    const response = await pool.query(sql);
    if(response.rowCount > 0){
      return response.rows
    }else{
      return new Error("No se pudo registrar la bicicleta")
    }
    
    
  } catch (error) {
    console.log("Error code: ", error.code, "\n", "Message: ", error.message);
  }
};
