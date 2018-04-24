const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');
const BASE_IMAGE_URL = process.env.BASE_IMAGE_URL;
const proxyBaseImageUrl = BASE_IMAGE_URL
    ? proxy(BASE_IMAGE_URL, {
        proxyReqPathResolver: function (req) {
            const newPath = BASE_IMAGE_URL + req.path;

            return newPath;
        }
    })
    : express.static(
        path.join(__dirname, '/public/files')
    )

const _ = express();

_.use('/files', proxyBaseImageUrl);

module.exports = (port) => {
    _.listen(port);
    console.log('listening on port %d', port)
    return _;
}