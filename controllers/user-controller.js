const { Users, Thoughts } = require('../models');

const userController = {
    getAllUsers(req, res) {
        Users.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
    
    // get one user by id
  getUserById({ params }, res) {
    Users.findOne({ _id: params.id })
    .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => {
        // If no user is found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // create new user
  createUser({ body }, res) {
    Users.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },

  updateUser({ params, body }, res) {
    Users.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },

  addFriend({ params }, res) {
    Users.findOneAndUpdate(
        { _id: params.userId },
        { $push: { friends: params.friendId }},
        { new: true, runValidators: true }
    )
    .populate({
        path: 'friends',
        select: ('-__v')
    })
    .select('-__v')
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => res.json(err));
  },

  // delete user
  deleteUser({ params }, res) {
    Users.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        // remove user's comments
        Thoughts.deleteMany ({ username: dbUserData.username })
        .then (() => {
        res.json({ message: 'User deleted'});
      })
      .catch(err => res.status(400).json(err));
      })
      .catch(err => res.status(400).json(err));
  },

// delete user
deleteFriend({ params }, res) {
    Users.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId }},
        { new: true }
        )
        .populate({
            path: 'friends',
            select: ('-__v')
        })
        .select('-__v')
        .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }
        res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    }

};



module.exports = userController;