import initialState from "./../state";
import { getRandomInt } from "./../randomizer/randomizer";
import {
  getKeySentAt,
  getDayMonthYear,
  getHoMiSe,
  sentAt
} from "./../datetime/dates";

const ChackSender = (state = initialState, action) => {
  switch (action.type) {
    case "CHAKA_SENDER":
      state = {
        ...state
      };
      let newPeopleArr = state.people;
      let newPeopleArrNorris = state.people;
      for (let j = 0; j < newPeopleArrNorris.length; j++) {
        if (newPeopleArrNorris[j].opened === true) {
          newPeopleArrNorris[j].lastUpdt = getKeySentAt();
          newPeopleArrNorris[j].lastSent = getDayMonthYear();
          newPeopleArrNorris[j].lastMsg = action.payload;
          newPeopleArrNorris[j].msgs = [
            ...state.people[j].msgs,
            {
              sender: newPeopleArrNorris[j].name,
              receiver: "Oleh",
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
      // console.log(action.payload);
      break;
    default:
      state = {
        ...state
      };
  }
  return state;
};

export default ChackSender;
