const User = require('./models/User');

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
    createUser: (_, { input }) => {
      const newUser = new User(input);
      newUser.save();
      return newUser;
    },
    updateUser: (_, { _id, input }) => {
      return User.findByIdAndUpdate(_id, input, { new: true });
    },

    deleteUser: (_, { _id }) => {
      return User.findByIdAndDelete(_id);
    },
  },
};

module.exports = resolvers;
