const jwt = require("jsonwebtoken");
const Admin = require("../Models/adminSchema");

const verifyAdmin = async (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).send({ error: "Access denied. No token provided." });
  }

  const token = authHeader.replace("Bearer ", "");

  if (!token) {
    return res.status(401).send({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = decoded;

    const admin = await Admin.findById(req.admin._id);
    if (!admin && !admin.isAdmin) {
      return res.status(403).send({ error: "Access denied. Admins only." });
    }

    next();
  } catch (ex) {
    console.error(ex);
    res.status(400).send({ error: "Invalid token." });
  }
};

module.exports = verifyAdmin;
