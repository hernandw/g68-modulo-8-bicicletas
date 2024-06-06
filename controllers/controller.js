import path from "path";
import { getBicicletasQuery, addBicicletasQuery } from "../models/queries.js";
const __dirname = path.resolve();

export const home = (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
};

export const bicicletas = async (req, res) => {
  try {
    const results = await getBicicletasQuery();
    res.json(results);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const addBicicletas = async (req, res) => {
  try {
    const { marca, modelo, precio, stock } = req.body;
    const results = await addBicicletasQuery( marca, modelo, precio, stock );
    res.json(results);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
