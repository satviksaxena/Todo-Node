const mongoose = require('mongoose');
const mongoConnection = process.env.MONGODB_URL || DATABASE_LOCAL
console.log(mongoConnection)
mongoose.connect(mongoConnection, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to db'));
db.once('open', function() {
    console.log('Successfully connected to database');
});