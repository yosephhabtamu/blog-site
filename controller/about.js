const User = require("../models/user");
module.exports = async (req, res) => {
  if (!userName) res.render("forbidden");
  else {
User.findOne({userName},(error, user) => {
      if (error) {
        console.error(error);
        return res.render("notfound");
      }
       res.render("about", { userName, about: user.description });
    });
  }
};
