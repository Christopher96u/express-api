const allRoles = {
  user: ["getProducts"],
  admin: ["getUsers", "updateUsers", "removeUsers"],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
