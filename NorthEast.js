/*
███╗   ██╗ ██████╗ ██████╗ ████████╗██╗  ██╗███████╗ █████╗ ███████╗████████╗
████╗  ██║██╔═══██╗██╔══██╗╚══██╔══╝██║  ██║██╔════╝██╔══██╗██╔════╝╚══██╔══╝
██╔██╗ ██║██║   ██║██████╔╝   ██║   ███████║█████╗  ███████║███████╗   ██║
██║╚██╗██║██║   ██║██╔══██╗   ██║   ██╔══██║██╔══╝  ██╔══██║╚════██║   ██║
██║ ╚████║╚██████╔╝██║  ██║   ██║   ██║  ██║███████╗██║  ██║███████║   ██║
╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝

										THAT DIMENSIONAL JAVASCRIPT JAWN
											by austin for free (MIT)
*/

angular.module('NE', []).service('NorthEast', ['$window', '$rootScope', function ($window, $rootScope) {

	$rootScope.dimensions = {
		x: $window.innerWidth,
		y: $window.innerHeight
	};

	angular.element(window).on('resize', function(){
		$rootScope.apply(function () {
			$rootScope.dimensions.x = $window.innerWidth;
			$rootScope.dimensions.y = $window.innerHeight;
		});
	})

	var NorthEast = {};

	NorthEast.addDimension = function (name, size) {
		if (typeof name === string && Number.isNaN(name.substring(0, 1)) && !Number.isNaN(size)) {
			$rootScope.dimensions[name] = size;
		} else {
			console.log('NE: Invalid dimension provided: '+ String.toString(name));
		}
	}

	NorthEast.dimensional = function (dimension) {
		return {
			get: function (offset) {
				offset = (Number.isInteger(offset) ? offset : 0);
				return $rootScope.dimensions[dimension] - offset;
			},
			percent: function (percent, offset) {
				percent = (Number.isInteger(percent) ? percent : 100);
				offset = (Number.isInteger(offset) ? offset : 0);
				return ($rootScope.dimensions[dimension] - offset) * (percent / 100);
			},
			factor: function (factor, offset) {
				factor = (!Number.isNaN(factor) ? factor : 1);
				return ($rootScope.dimensions[dimension] - offset) * factor;
			},
			divide: function (divisions, offset, margin) {
				divisions = (Number.isInteger(divisions) && divisions !== 0 ? divisions : 1);
				offset = (Number.isInteger(offset) ? offset : 0);
				margin = (Number.isInteger(margin) ? margin : 0);
				return ($rootScope.dimensions[dimension] - offset - (margin * divisions)) / divisions;
			},
			fitText: function (text, offset, max) {
				if (!text || !text.length) return (max && Number.isInteger(max) ? max + 'px' : '1em');
				offset = (Number.isInteger(offset) ? offset : 0);
				var size = 9 + ((($rootScope.dimensions[dimension] - offset) * 0.9) / text.length );
				return (size > max ? max : size) + 'px';
			}
		}
	}

	NorthEast.x = NorthEast.dimensional('x');
	NorthEast.y = NorthEast.dimensional('y');

	return NorthEast;
}]);
