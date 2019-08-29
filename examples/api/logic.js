const LogicTierError = require('../../lib/application.error');

let balance = 50;

/**
 *
 * @param {Number} userId 
 * @param {Number} price
 */
function doLogic(userId, price) {
	if (price > balance) {
		throw new LogicTierError(403, 'Not enough balance', `Your balance is ${balance} but You need ${price}`, { userId, price, anotherFiled: 'whatever you want' });
	}
};

module.exports = doLogic;