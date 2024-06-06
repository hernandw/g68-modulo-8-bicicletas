import path from "path";
import { getBicicletasQuery } from "../models/queries.js";
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
