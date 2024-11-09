import { combineReducers } from "redux";
import cartReducer from "./cart";

const allReducers = combineReducers({
    cartReducer,
    // Thêm nhiều reducer ở đây
});

export default allReducers;