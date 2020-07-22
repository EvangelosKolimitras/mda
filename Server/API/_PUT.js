const UserModel = require( "../Database/MongoDB/model/UserModel/User.model");

const _PUT = async (req, res) => {
	try {
		const u_user = {
			"name": req.body.name,
			"email": req.body.email,
			"age": req.body.age,
			"password": req.body.password,
		}
		const user = await UserModel.findByIdAndUpdate(req.params.id,u_user,{new:true});
		res.status( 200 ).json( { user } );
	} catch ( error ) {
		res.status( 503 ).json( { message : error } );
	}
}

module.exports = {
	user: _PUT
}
