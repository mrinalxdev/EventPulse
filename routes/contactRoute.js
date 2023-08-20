const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ message: "Getting all contacts" });
});
router.route("/").post((req, res) => {
  res.json({ message: "Creating contact" });
});
router.route("/:id").get((req, res) => {
  res.json({ message: `Getting all contacts for ${req.params.id}` });
});
router.route("/:id").put((req, res) => {
  res.json({ message: `Updating all contacts for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.json({ message: `Deleting all contacts ${req.params.id}` });
});

module.exports = router;
