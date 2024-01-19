const users = require("../models/User");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const userdata = await users.find();
  return res.json(userdata);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
 try {
   const product = await users.findOne({ _id: id });
   return res.json({"data":product});
  
 } catch (error) {
  res.json({"error": error});
 }
});

module.exports = router;
