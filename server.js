const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');
const BASE_IMAGE_URL = process.env.BASE_IMAGE_URL;
const proxyBaseImageUrl = BASE_IMAGE_URL
    ? proxy(BASE_IMAGE_URL, {
        proxyReqPathResolver: function (req, res) {
            if (req.path) {
                const newPath = BASE_IMAGE_URL + req.path;
                return newPath;
            } else {
                res.redirect('/')
            }
        },
        skipToNextHandlerFilter: function(proxyRes) {
            return proxyRes.statusCode === 404;
        }
    })
    : express.static(
        path.join(__dirname, '/public/files')
    )

const _ = express();

_.use('/files', proxyBaseImageUrl);
_.get('/', function(req, res) {
    res.send('ok');
})

module.exports = (port) => {
    _.listen(port);
    console.log('listening on port %d', port)
    return _;
}