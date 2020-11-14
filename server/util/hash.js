/* eslint-disable dot-notation */
const crypto = require('crypto');

const SECRET = process.env['SECRET'] || 'xyzzy';

function hash(password) {
    return crypto
        .createHmac('sha256', SECRET)
        .update(password)
        .digest('base64');
}

module.exports = hash;

