const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	products: [
		{
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product'
			}
		}
	]
});

module.exports = Wishlist = mongoose.model('Wishlist', WishlistSchema);
