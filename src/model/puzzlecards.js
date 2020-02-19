import request from "../util/request";

const delay = millsecond => {
  return new Promise(resolve => {
    setTimeout(resolve, millsecond);
  });
};

export default {
  namespace: "puzzlecards",
  state: {
    data: [
      {
        id: 1,
        setup: "Did you hear about the two silk worms in a race?",
        punchline: "It ended in a tie"
      },
      {
        id: 2,
        setup: "What happens to a frog's car when it breaks down?",
        punchline: "It gets toad away"
      }
    ],
    counter: 100
  },
  effects: {
    *queryInitCards(_, { call, put }) {
      const endPointURI = "/api/random_joke";
      const puzzle = yield call(request, endPointURI);
      yield put({ type: "addNewCard", payload: puzzle });
      yield call(delay, 1000);
      const puzzle2 = yield call(request, endPointURI);
      yield put({ type: "addNewCard", payload: puzzle2 });
    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter
      };
    }
  }
};
