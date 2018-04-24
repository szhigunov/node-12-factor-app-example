const config = require('dotenv').config();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// MongoClient.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, (err, db) => {
//     if (err) {
// 	    throw new Error('Failed connection to db', err);
//     } else {
//         console.log('connected to mongodb')
//     }
// });

const app = require('./server.js')(process.env.APP_PORT);