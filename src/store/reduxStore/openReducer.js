import initialState from "./../state";

const openReducer = (state = initialState, action) => {
  state = {
    ...state
  };
  let newPeopleArr = [...state.people];
  switch (action.type) {
    case "OPEN":
      for (let i = 0; i < newPeopleArr.length; i++) {
        if (action.payload === newPeopleArr[i].name) {
          newPeopleArr[i].opened = true;
        }
      }
      for (let q = 0; q < newPeopleArr.length; q++) {
        if (action.payload !== newPeopleArr[q].name) {
          newPeopleArr[q].opened = false;
        }
      }
      newPeopleArr
        .sort(function (a, b) {
          return a.lastUpdt - b.lastUpdt;
        })
        .reverse();
      state = {
        ...state,
        people: newPeopleArr
      };
      //  console.log(action.type);
      //  console.log(action.payload);
      //console.log(state.people);
      break;
    default:
      state = {
        ...state
      };
  }
  return state;
};

export default openReducer;
