const UserModel = require( "../Database/MongoDB/model/UserModel/User.model");



const _POST_USER = async (req, res) => {
	try {
		const newUser = new UserModel(req.body);
		const savedUser = await newUser.save();
		res.status(200).json({savedUser});

	} catch (error) {
		res.status(503).json({ message: error });
	}
}

module.exports = {
	user: _POST_USER
}

