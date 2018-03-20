const path = require('path');
const express = require('express');

const _ = express();

_.use('/files', express.static(
    path.join(__dirname, '/public/files')
));



module.exports = (port) => {
    _.listen(port);
    console.log('listening on port %d', port)
    return _;
}