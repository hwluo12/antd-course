import request from "../util/request";
import { message } from "antd";

const delay = millsecond => {
  return new Promise(resolve => {
    setTimeout(resolve, millsecond);
  });
};

export default {
  namespace: "puzzlecards",
  state: {
    data: [],
    counter: 100
  },
  effects: {
    *queryInitCards(_, { call, put }) {
      try {
        const endPointURI = "/api/random_joke";
        const puzzle = yield call(request, endPointURI);
        yield put({ type: "addNewCard", payload: puzzle });
        yield call(delay, 1000);
        const puzzle2 = yield call(request, endPointURI);
        yield put({ type: "addNewCard", payload: puzzle2 });
      } catch (e) {
        message.error("数据获取失败");
      }
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
