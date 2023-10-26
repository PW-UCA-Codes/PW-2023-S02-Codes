const express = require("express");
const router = express.Router();

router.get("/hello", (req, res, next) => {
  const { name } = req.query;

  return res.status(200).json({ message: `Hello ${name??"World"}! :v` });
});

router.post("/fullname", (req, res, next) => {
  const { name, lastname } = req.body;

  if(!name || !lastname) {
    return res.status(400).json({ error: "Maje, manda el nombre y el apellido" });
  }

  return res.status(200).json({ fullname: `${name} ${lastname}` });
})

module.exports = router;