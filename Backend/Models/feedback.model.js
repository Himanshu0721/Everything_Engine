const mongoose = require("mongoose");

const feedBackSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    feedBack: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const FeedBack = mongoose.model("FeedBack", feedBackSchema);

module.exports = FeedBack;
