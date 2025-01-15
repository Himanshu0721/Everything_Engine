const Contact = require("../Models/contact.model");

const contactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contactForm = new Contact({
      name,
      email,
      message,
    });
    await contactForm.save();
    return res.status(200).json({ success: true, message: "Details Sent" });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = contactForm;
