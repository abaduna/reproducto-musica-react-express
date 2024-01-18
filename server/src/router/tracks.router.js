const { Router } = require("express");
const multer = require("multer");
const router = Router();
const { getTracks, uploadTraks } = require("./../contolers/tracks.controlers");
const database = require("./../db");
const fs = require("fs");

router.get("/tracks", getTracks);

const upload = multer({
  dest: "upload/",
});

router.post("/tracks", upload.single("track"), async (req, res) => {
  const connection = await database.getConnection();
  let { category } = req.body;
  console.log(req.file);
  const origianlNameee = savetrackFuncion(req.file);
  const urlTrack = `http://localhost:3001/${origianlNameee}`;
  const id_user = 1;
  try {
    await connection.query(
      `INSERT INTO tracks ( utr_tracks, category,id_user) VALUES (?,?,?);`,
      [urlTrack, category, id_user]
    );
    res.status(200).json({ message: "salio bien" });
  } catch (error) {
    console.error("Error en la consulta:", error);
      await connection.end();
      res.status(500).json({ error: "Error en la consulta" });
  }
  
});

function savetrackFuncion(file) {
  console.log(`file ${file}`);
  const newPath = `./upload/${file.originalname}`;
  fs.renameSync(file.path, newPath);
  let origianlNameee = file.originalname;
  return origianlNameee;
}

module.exports = router;
