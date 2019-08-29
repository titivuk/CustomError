const Koa = require('koa');
const doLogic = require('./logic');
const createResponseError = require('./response.error');
const logger = require('./logger');

const app = new Koa();

app.on('error', (ctx, err) => {
	logger.error(err);
});

app.use(async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = createResponseError(err);
		app.emit('error', ctx, err);
	}
});

app.use(async (ctx) => {
	doLogic(1, ctx.query.b);
	ctx.body = 'Hello World';
});

app.listen(3001, () => {
	console.log('Server is listening on port 3001');
});