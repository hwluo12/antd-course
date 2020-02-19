import request from "../util/request";

export default {
  namespace: "cards",
  state: {
    cardsList: [],
    statistic: {}
  },
  effects: {
    *queryList(_, { call, put }) {
      const url = "/api/cards";
      const rsp = yield call(request, url);
      yield put({ type: "saveList", payload: rsp.result });
    },
    *addOne({ payload }, { call, put }) {
      const url = "/api/addOne";
      const rsp = yield call(request, url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "content-type": "application/json"
        }
      });
      yield put({ type: "queryList" });
      return rsp;
    },
    *getStatistic({ payload }, { call, put }) {
      const url = `/api/cards/${payload}/statistic`;
      const rsp = yield call(request, url);
      yield put({
        type: "saveStatistic",
        payload: { id: payload, data: rsp.result }
      });
      return rsp;
    }
  },
  reducers: {
    saveList(state, { payload: cardsList }) {
      return {
        ...state,
        cardsList
      };
    },
    saveStatistic(state, { payload: { id, data } }) {
      return {
        ...state,
        statistic: {
          ...state.statistic,
          [id]: data
        }
      };
    }
  }
};
