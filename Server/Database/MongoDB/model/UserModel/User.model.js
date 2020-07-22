const mongoose = require("mongoose");
const UserSchema = require( "../../schema/User.schema");

const UserModel = mongoose.model("username", UserSchema);

module.exports = UserModel;
