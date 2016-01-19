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
