const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/student',
    createProxyMiddleware({
      target: 'http://localhost:8080/api/student',
      changeOrigin: true,
      pathRewrite: {
        "^/student" : ""
      }
    })
  );
};