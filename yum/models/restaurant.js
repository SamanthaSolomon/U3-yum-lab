const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const restaurantSchema = new Schema(
    {
        name : String,
        address : { street: String, zipcode : Number},
        yelp : String,
        items : [
            {title : String},
            {title : String}
        ]
    }
)

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant 