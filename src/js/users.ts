import Store from "./store";

//TODO: duplicate levels from dataLevels for users.

const getUserById = (userId: number) =>
  Store.getUsers().find((user) => user.id === userId);

const Users = {
  getUserById,
};

export default Users;
