import {createStore} from "redux";
import rootReducer from "../reducers/index";
import questions from "../data/questions";

const defaultState = {
    questions,
    checkedValue: new Array(questions.length)
};

const store = createStore(rootReducer, defaultState);

export default store;
