import { combineReducers } from "redux";
import farm from "./farm";
import budget from "./budget";
import market from "./market";

export default combineReducers({
  farm,
  budget,
  market
});
