const { v4: uuidv4 } = require("uuid");
const Animal = require("../models/animalModel");
const fs = require("fs");

// Read
exports.getAll = async (req, res) => {
  try {
    await Animal.find({}).then((data) => {
      res.status(200).json({
        response: data,
        error: [],
      });
    });
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
// Read one
exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    await Animal.findOne({ animalId: id }).then((data) => {
      res.json({
        response: data,
        error: [],
      });
    });
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
// Create
exports.create = async (req, res) => {
  try {
    const {
      animalName,
      animalSpecies,
      animalHabit,
      animalDesciption,
      authorUid,
      authorName,
      authorEmail,
      authorProfile,
      date,
    } = req.body;
    if (
      !(
        animalName &&
        animalSpecies &&
        animalHabit &&
        animalDesciption &&
        authorUid &&
        authorName &&
        authorEmail &&
        authorProfile &&
        date
      )
    ) {
      return res.send("Input required");
    }
    if (!req.file) return res.send("file required");
    animalImage = req.file.filename;
    await Animal.create({
      animalId: uuidv4(),
      animalName: animalName,
      animalSpecies: animalSpecies,
      animalHabit: animalHabit,
      animalDesciption: animalDesciption,
      animalImage: animalImage,
      comment: [],
      authorUid: authorUid,
      authorName: authorName,
      authorEmail: authorEmail,
      authorProfile: authorProfile,
      date: date,
    }).then(() => {
      res.json({
        response: "Created successfully",
        error: [],
      });
    });
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
// Update Post
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { animalName, animalSpecies, animalHabit, animalDesciption } =
      req.params;
    if (!(animalName && animalSpecies && animalHabit && animalDesciption))
      return res.send("Input required");
    await Animal.findOneAndUpdate(
      { animalId: id },
      {
        animalName: animalName,
        animalSpecies: animalSpecies,
        animalHabit: animalHabit,
        animalDesciption: animalDesciption,
      }
    ).then(() => {
      res.json({
        response: "Update post successfully",
        error: [],
      });
    });
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
// Delete
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await Animal.findOneAndDelete({ animalId: id });
    await fs.unlink("./images/" + removed.animalImage, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Remove success");
      }
    });
    res.json({ response: "Remove successfully", error: [] });
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
// Comment
exports.comment = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    await Animal.findOneAndUpdate({ animalId: id }, { comment: comment }).then(
      () => {
        res.json({
          response: "Update comment successfully",
          error: [],
        });
      }
    );
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
