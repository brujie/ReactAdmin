const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
    app.use("/api",
        createProxyMiddleware({
            target: "https://api.theone.art",//目标端口
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        })
    );
};
