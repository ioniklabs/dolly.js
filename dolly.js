/*
|
|	dolly.js - dolly.js is a super simple JavaScript plugin
|	for cloning JavaScript variables. Support is omitted for
|	several object types that were not required in the
|	application but support may be added in the future.
|
|	credit: 	IonikLabs (http://www.ioniklabs.com)
|	author: 	Matt Johnson
|	source: 	https://github.com/ioniklabs/dolly.js 
|
| */

var dolly = ( function( document, window ) {

	function dolly( variable ) {
		return clone( variable );
	};

	function clone( variable ) {
		if ( is__array( variable ) ) {
			var copy = [],
				index = 0,
				length = variable.length;
			for ( index; index < length; index++ ) {
				copy[index] = dolly(variable[index]);
			}
			return copy;
		}

		if ( is__object( variable ) ) {
			var copy = {};
			for ( var attr in variable ) {
				if ( variable.hasOwnProperty( attr ) ) copy[attr] = dolly( variable[attr] );
			}
			return copy;
		}

		return variable;
	};

	function is__array( variable ) {
		return variable instanceof Array ? true : false;
	};

	function is__object( variable ) {
		return variable instanceof Object ? true : false;
	};

	return dolly;

} )( document, window );
