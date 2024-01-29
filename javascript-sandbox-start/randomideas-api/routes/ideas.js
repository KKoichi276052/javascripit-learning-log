const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

// Get All
router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    res.json({ success: false, message: err });
  }
});

// Add idea
router.post("/", async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});

// Get single idea
router.get("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});

// Update idea
router.put("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    // Match the usernames
    if (idea.username === req.body.username) {
      const updatedIdea = await Idea.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            text: req.body.text,
            tag: req.body.tag,
          },
        },
        { new: true }
      );
      return res.json({ success: true, data: updatedIdea });
    }
    // Username don't match
    res.status(403).json({
      success: false,
      error: "You are not authorized to delete this resource",
    });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});

// Delete Idea
router.delete("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    // Match the usernames
    if (idea.username === req.body.username) {
      await Idea.findByIdAndDelete(req.params.id);
      res.json({ success: true, data: {} });
    }

    // Username don't match
    res.status(403).json({
      success: false,
      error: "You are not authorized to delete this resource",
    });
  } catch (err) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
    res.json({ success: false, message: err });
  }
});

module.exports = router;
