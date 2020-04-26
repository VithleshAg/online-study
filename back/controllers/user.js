const User = require("../models/user");

exports.signup = (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(404).json({ error });
    }
    // user.salt = undefined;
    // user.hashed_password = undefined;
    res.json({
      user
    });
  });
};
