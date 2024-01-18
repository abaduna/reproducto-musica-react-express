const multer = require("multer");
const database = require("../db");
const fs = require("fs");
const { Readable } = require("stream");
const getTracks = async (req, res) => {
  const connection = await database.getConnection();
  try {
    const data = await connection.query(`SELECT * FROM tracks`);
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error en la consulta:", error);
    await connection.end();
    res.status(500).json({ error: "Error en la consulta" });
  }
};

module.exports = {
  getTracks,
};
