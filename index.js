const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

// connect to mongo database
const url = 'mongodb://localhost:27017/nucampsite';
const connect = mongoose.connect(url, {
  useCreateIndex: true, 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(() => {
  console.log('Connected correctly to server');

  Campsite.create({ // create a new document based on the model
    name: 'React Lake Campground',
    description: 'test'
  })
  .then(campsite => {
    console.log(campsite);
    return Campsite.find();
  })
  .then(campsites => { 
    console.log(campsites);
    return Campsite.deleteMany();
  })
  .then(() => { 
    return mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  })
})