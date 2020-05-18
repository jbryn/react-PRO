const usersReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE":
      return action.users;
    case "ADD":
      return [
        ...state,
        {
          idUser: state.length > 0 ? state[state.length - 1].idUser + 1 : 1,
          firstName: action.firstName,
          lastName: action.lastName,
        },
      ];
    case "REMOVE":
      return state.filter((user) => user.idUser !== action.idUser);
    default:
      return state;
  }
};

export default usersReducer;
