import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // storage: localStorage or sessionStorage
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
const persistConfig = {
    key: "root", // at what point in the state tree to start persisting
    storage, // where to store the data storage is localStorage by default
    whitelist: ["cart"], // which reducers to persist here cart items only in this case
};
// to use this we have to import persistStore from redux-persist
// and export as persistReducer with persistConfig and rootReducer

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory : directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);