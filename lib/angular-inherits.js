/**
 *
 * (c) Anthony Matarazzo <email@anthonymatarazzo.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';


// third-party modules
var inherits = require('inherits');


/**
 * This method allows you to inherit from a super class while providing the prototype (class body) in one call
 *
 * <code>
 *     function myClass() {
 *     		superClass.apply(this);
 *     }
 *
 *     angular.inherits(myClass, superClass, {
 *
 *     		dataMember: 'some variable' ,
 *
 *     		myMethod: function() {
 *
 *     		}
 *
 *	   });
 *
 *	   var obj = new myClass();
 *	   obj.myMethod();
 *
 *	   // obj instanceof myClass
 *	   // obj instanceof superClass
 * </code>
 *
 * @param {Function} childClass The child class function constructor (the class that IS EXTENDING)
 * @param {Function} superClass The super class function constructor (the class that is BEING EXTENDED)
 * @param {Object|Array|undefined} proto Object data to add onto the child class' prototype OR array of services to $inject
 * @return {void}
 */
module.exports = function angular_inherits(childClass, superClass, proto) {

	// optionally, the third argument can be an array of services to inject
	var $inject;
	if (arguments.length === 4) {
		proto = arguments[3];
		$inject = arguments[2];
	} else if (proto instanceof Array) {
		$inject = proto;
		proto = undefined;
	}

	if (!proto) {

		inherits(childClass, superClass);

	} else {

		var p = {
			constructor: {
				value: childClass ,
				enumerable: false ,
				writable: true,
				configurable: true
			}
		};

		var m;
		for (m in proto) {
			p[m] = {
				value: proto[m],
				writable: true,
				enumerable: true,
				configurable: true
			};
		}

		childClass.super_ = superClass;

		childClass.prototype = Object.create(superClass.prototype, p);

	}

	if ($inject) {
		childClass.$inject = $inject;
	}
};