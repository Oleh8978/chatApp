import initialState from "./../state";
import { getRandomInt } from "./../randomizer/randomizer";
import {
  getKeySentAt,
  getDayMonthYear,
  getHoMiSe,
  sentAt
} from "./../datetime/dates";

const masgAdder = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state
      };
      let newPeopleArr = state.people;
      for (let i = 0; i < newPeopleArr.length; i++) {
        if (newPeopleArr[i].opened === true) {
          newPeopleArr[i].lastUpdt = getKeySentAt();
          newPeopleArr[i].lastSent = getDayMonthYear();
          newPeopleArr[i].lastMsg = action.payload;
          newPeopleArr[i].msgs = [
            ...state.people[i].msgs,
            {
              sender: "Oleh",
              receiver: newPeopleArr[i].name,
              key: getRandomInt(4562323121231),
              id: getKeySentAt(),
              sentAt: sentAt(),
              msg: action.payload
            }
          ];
        }
      }
      newPeopleArr
        .sort(function (a, b) {
          return a.lastUpdt - b.lastUpdt;
        })
        .reverse();
      state.people = [...newPeopleArr];
      break;
    default:
      state = {
        ...state
      };
  }
  return state;
};

export default masgAdder;
