const functions = require('firebase-functions');
const next = require('next');

const app = next({
  dev: false,
  conf: { distDir: '.next' }, // This tells Next where the build output is
});

const handle = app.getRequestHandler();

exports.nextApp = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});
