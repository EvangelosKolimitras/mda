const jwt = require("jsonwebtoken");

exports.TokenAuthentication = data => jwt.sign(
	{ 'id' : data } , process.env.JWT_SECRETE ,
	{ expiresIn : process.env.JWT_EXPIRES_IN }
)
