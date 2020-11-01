import initialState from "./../state";

const usersList = (state = initialState, action) => {
  switch (action.type) {
    case "SORT":
      state = {
        ...state
      };
      let newPeople = state.people;
      newPeople.sort(function (a, b) {
        return a.lastUpdt - b.lastUpdt;
      });
      newPeople.reverse();
      console.log(action.type);
      console.log(newPeople);
      state = {
        people: newPeople
      };
      break;
    default:
      state = {
        ...state
      };
  }
  return state;
};

export default usersList;
