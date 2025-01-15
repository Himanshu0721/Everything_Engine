const FeedBack = require("../Models/feedback.model");

const feedBack = async (req, res) => {
  try {
    const { feedBack, rating, email } = req.body;

    const newFeedBack = new FeedBack({
      email,
      feedBack,
      rating,
    });
    await newFeedBack.save();
    res.status(200).json({ success: true, message: "Feedback sent" });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = feedBack;
