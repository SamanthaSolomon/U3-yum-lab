const mongoose = require('../db/connection')
const Restaurant = require('../models/restaurant')
const db = mongoose.connection

const manyRestaurants =  require ('./seedData.json')

Restaurant.insertMany(manyRestaurants).then((restaurants) => {
    console.log('restaurants-', restaurants)
    db.close()
})

