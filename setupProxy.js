const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use('/api', createProxyMiddleware({
        target: 'http://localhost:8888',
        changeOrigin: true
    }))
    app.use('/my-api', createProxyMiddleware({
        target: 'http://localhost:8888',
        pathRewrite: {
            '^/my-api': ''
        }
    }))
}