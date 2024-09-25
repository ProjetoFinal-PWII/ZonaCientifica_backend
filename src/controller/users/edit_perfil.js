const User = require("../../models/User");

async function confirmEdit(req, res) {
  const { name, userName, phone, email, _id } = req.body;
  const picture = req.file?.filename;
  
  const user = await User.updateOne(
    { _id: _id },
    { $set: { name, userName, phone, picture, email } }
  );

  const newUser = await User.findOne({email: email})
  res.send(newUser);
}

module.exports = {confirmEdit};
