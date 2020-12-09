const { Router } = require('express');
const Product = require('../models/Product');

const router = new Router();

/**
 * @param {ProductCategory} category
 */
router.post('/', async function ({ originalUrl, category, body: { name, price, imageUrl } }, res) {
    try {
        const product = new Product({ name, price, imageUrl, categoryId: category._id });
        const { _id } = await product.save();
        return res.set('Content-Location', `${originalUrl}/${_id}`).status(201).json(product);
    }
    catch ({ code, message }) {
        return res.status(code === 11000 ? 409 : 400).send(message);
    }
});

/**
 * @param {ProductCategory} category
 */
router.get('/all', async function ({ category }, res) {
    await category.populate('products').execPopulate();
    return res.json(category.products);
});

router.get('/:id', async function ({ params: { id } }, res) {
    const product = await Product.findById(id);
    return product ? res.json(product) : res.sendStatus(404);
});

module.exports = router;
