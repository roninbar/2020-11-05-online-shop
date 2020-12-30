const { Router } = require('express');
const User = require('../models/User');

const router = new Router();

router.put('/:id', async function ({ originalUrl, params: { id: _id }, body: { email, password, firstName, lastName, city, streetAddress } }, res) {
    const obj = { _id, role: 'user', email, password, firstName, lastName, city, streetAddress };
    const user = await User.findById(_id) || new User(obj);
    const { isNew } = user;
    if (!isNew) {
        user.overwrite(obj);
    }
    await user.save();
    return res.set('Content-Location', originalUrl).status(isNew ? 201 : 200).json(user.toObject({ useProjection: true }));
});

module.exports = router;
