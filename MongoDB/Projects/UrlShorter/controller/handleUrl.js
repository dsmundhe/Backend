const shortid = require('shortid')
async function handleUrl(req, res) {
    const shortID = shortid();
    res.send(shortID)
}


module.exports = { handleUrl }