const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected'))
    .catch((err) => console.log(err));

module.exports = {
    mongoose
}