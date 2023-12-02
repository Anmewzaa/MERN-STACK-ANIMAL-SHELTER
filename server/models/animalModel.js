const mongoose = require("mongoose");

const animalSchema = mongoose.Schema({
  animalId: {
    type: String,
    require: true,
    unique: true,
  },
  animalName: {
    type: String,
    require: true,
  },
  animalSpecies: {
    type: String,
    require: true,
  },
  animalHabit: {
    type: String,
    require: true,
  },
  animalDesciption: {
    type: String,
    require: true,
  },
  animalImage: {
    type: String,
    require: true,
  },
  comment: {
    type: [],
    require: true,
  },
  authorUid: {
    type: String,
    require: true,
  },
  authorName: {
    type: String,
    require: true,
  },
  authorEmail: {
    type: String,
    require: true,
  },
  authorProfile: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
});

module.exports = mongoose.model("Animal", animalSchema);
