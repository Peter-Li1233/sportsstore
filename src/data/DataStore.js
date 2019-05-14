import { createStore, applyMiddleware } from "redux";
import { ShopReducer } from "./shopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { asyncActions } from "./AsyncMiddleware";

export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer), 
    applyMiddleware(asyncActions));