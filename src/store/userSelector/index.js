export function getAuth(state) {
  console.log("getAuth");
  return state.user;
};
export function getPasswordAndCode(state) {
  console.log("getPassword");
  return { code: state.user.code, password: state.user.password };
};

