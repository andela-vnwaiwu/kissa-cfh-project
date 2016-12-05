/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]*/
<<<<<<< HEAD
<<<<<<< HEAD
/* eslint amd:true */
=======
>>>>>>> dd0c68b... feature(search-users): create route that searches for users
=======
/* eslint amd:true */
>>>>>>> c50c211... fix(eslint): set eslint configuration
/**
 * Module dependencies.
 */
const mongoose = require('mongoose');

const User = mongoose.model('User');

/**
 * Gets all users from the database
 */
exports.users = (req, res) => {
  if (req.user && req.user._id) {
    const query = req.params.email || '';
    User.find({ email: { $regex: query } }).limit(10)
      .exec((err, result) => {
        if (err) {
          return res.json(err);
        } else if (!result) {
          // hope this never happens.
          return res.send('I did not find any data');
        }
        res.json(result);
      });
  }
};
