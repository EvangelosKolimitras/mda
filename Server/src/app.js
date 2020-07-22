const cluster = require("cluster")
const os = require("os");

// Check if the file is being executed in master mode
if ( cluster.isMaster ){
	// If not, then create clusters
	// The number of clusters is gonna be the same number as the virtual cores of the host system
	for ( let c = 0 , cs = os.cpus().length; c <= cs; c++ ) {
		cluster.fork()
		console.log("master")
	}
} else {
	console.log('child')
	// Create the server if the clustering has been enabled
	const express = require( 'express' );

	const morgan      = require( 'morgan' );
	const app         = express();
	const { resolve } = require( 'path' );
	const chalk       = require( 'chalk' );
	const connection  = require( '../Database/MongoDB/connection/connection' );
	const api         = require( '../API/api' );

	// Require the configurations from a .env file
	require( 'dotenv' ).config( { path : resolve( __dirname , '../../Config/.env' ) } );

	// Morgan
	app.use(morgan("dev"))

	// Middleware
	app.use( express.json() );

	// Routes
	app.use( '/api' , api );

	// Server listener
	app.listen( process.env.PORT , () => console.log( `Listening on port ${ chalk.blue( process.env.PORT ) }` ))
}
