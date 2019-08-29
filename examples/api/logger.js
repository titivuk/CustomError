const util = require('util');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;


/**
 * Custom log format function
 *
 * @param {string} level
 * @param {String} message
 * @param {String} stack
 * @param {Obhect} entity
 * @return {string}
 */
function customFormat({ level, timestamp, message, error }) {
	if (level === 'error') {
		return util.format('[%s] %s: message: %s\n%O', timestamp, level, message, error);
	}

	return util.format('[%s] %s: message: %s', timestamp, level, message);
}

const logger = createLogger({
	level: 'info',
	format: combine(timestamp(), printf(customFormat)),
	transports: [
		new transports.Console(),
	]
});

function error(err) {
	logger.error(err.message, { error: err });
}

module.exports = {
	error,
};