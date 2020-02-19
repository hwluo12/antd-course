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
    },
    *addOne({ payload }, { call, put }) {
      const url = "/api/addOne";
      yield call(request, url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json"
        }
      });
      yield put({ type: "queryList" });
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
