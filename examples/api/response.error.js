const LogicTierError = require('../../lib/application.error');

function createResponseError(error) {
	if (error instanceof LogicTierError) {
		return {
			status: error.status,
			title: error.title,
			detail: error.detail,
		};
	}

	return {
		message: 'Internal Server Error',
		status: 500
	};
}

module.exports = createResponseError;