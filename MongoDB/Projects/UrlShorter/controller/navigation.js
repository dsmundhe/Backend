const { urlModel } = require('../models/url')
const naviGation = async (req, res) => {
    const shortID = req.params.shortID;
    const user = await urlModel.find({ shortID });
    const url = await user.find((user) => user.shortID === shortID)
    if (url) {
        res.redirect(url.redirectUrl)
    } else {
        res.json({ msg: 'Url not registred!' })
    }
}
module.exports = { naviGation }