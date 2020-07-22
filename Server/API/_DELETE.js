const UserModel = require( "../Database/MongoDB/model/UserModel/User.model");

const _DELETE_USER = async (req, res, next) => {
	try {
		const user = await UserModel.findById(req.params.id);
		const removedUser = await user.remove();
		res.status(200).json({ message: "User removed", removedUser });
	} catch (error) {
		res.status(503).json({ message: error });
	}
}

module.exports = {
	user: _DELETE_USER
}
