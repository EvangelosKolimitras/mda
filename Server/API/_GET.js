const UserModel = require( "../Database/MongoDB/model/UserModel/User.model");
const { TokenAuthentication } =  require("../Auth/jwt");

const _GET_USERS = async ( req , res, next ) => {
	try {
		const user = await UserModel.find();
		const token = TokenAuthentication(user.id)

		// Send users's object as a response
		res.status( 200 ).json( { token, user });

	} catch ( error ) {
		res.status( 503 ).json( { message : error } );
	}
};

const _GET_USER = async (req, res, next) => {
	try {
		const user = await UserModel.findById(req.params.id);

		res.status(200).json({user});

	} catch (error) {
		res.status(503).json({ message: error });
	}
}

module.exports = {
	users: _GET_USERS,
	user: _GET_USER
}
