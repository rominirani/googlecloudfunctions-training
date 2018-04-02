const uuid = require('uuid');

// Return a newly generated UUID in the HTTP response.
exports.getUUID = function (req, res) {
    res.send(uuid.v4());
};