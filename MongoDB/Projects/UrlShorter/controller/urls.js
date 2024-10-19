const { urlModel } = require('../models/url');

const urls = async (req, res) => {
    try {
        const users = await urlModel.find({});
        res.render('home', {
            urls: users.redirectUrls
        })
    } catch (error) {
        res.json({ msg: "Can't load!" })
    }
}
