const { model, Schema } = require('mongoose');

const schema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    delivery: {
        on: { type: Date, required: true },
        to: {
            city: { type: String, required: true },
            street: { type: String, required: true },
            house: { type: Number, required: true },
        },
    },
    payment: {
        cc: {
            last4: { type: String, match: /^\w{4}$/, required: true, trim: true },
        }
    },
    items: [{
        _id: { type: Schema.Types.ObjectId, select: false },
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
    }],
}, {
    timestamps: true,
});

schema.virtual('payment.cc.number').set(function (ccnumber) {
        const match = ccnumber.match(/(\w{4})\s*$/);
        this.payment.cc.last4 = match && match.length >= 2 && match[1];
    });

module.exports = model('Order', schema);

