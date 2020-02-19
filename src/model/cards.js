import request from "../util/request";

export default {
  namespace: "cards",
  state: {
    cardsList: []
  },
  effects: {
    *queryList(_, { call, put }) {
      const url = "/api/cards";
      const rsp = yield call(request, url);
      yield put({ type: "saveList", payload: rsp.result });
    }
  },
  reducers: {
    saveList(state, { payload: cardsList }) {
      return {
        ...state,
        cardsList
      };
    }
  }
};
