class ApplicationError extends Error {
	/**
	 *
	 * @param {String  Number} status
	 * @param {String} message
	 * @param {String} detail
	 * @param {Object} entity
	 */
	constructor(status, title, detail, entity = {}) {
		/**
		 * error message
		 */
		super(`${title}. ${detail}`);

		/**
		 * http status code
		 */
		this.status = status;
		this.name = this.constructor.name;
		/**
		 * Summary of the problem. It describes error type
		 * Example: `Not enough Balance`
		 */
		this.title = title;
		/**
		 * Detailed human-readable explanation of the problem
		 * Example: `Your balance is 50, but You need 55`
		 */
		this.detail = detail;
		/**
		 * This is additional data.
		 * Example: when we change account balance, what account it is, how we change balance and so on.
		 * For now I think this data is for logs and debugging and should not be sent to client (if we talk about API)
		 */
		this.entity = entity;

		/**
		 * Capturing stack trace, excluding constructor call from it.
		 */
		Error.captureStackTrace(this, this.constructor);
	}

}

module.exports = ApplicationError;