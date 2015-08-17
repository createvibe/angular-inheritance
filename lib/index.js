/**
 *
 * (c) Anthony Matarazzo <email@anthonymatarazzo.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';


// required modules
var inherits = require('./angular-inherits'),
	angular = require('angular');


// attach inherits onto the angular object
angular.inherits = inherits;



// export as "inherits"
module.exports = inherits;