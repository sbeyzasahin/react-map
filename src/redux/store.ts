import { createStore, combineReducers, applyMiddleware, compose, Store } from "redux";
import thunk from "redux-thunk";
import { layersReducer } from "./reducer/layers";

const rootReducer = combineReducers({
    layers: layersReducer
});

const reduxExtention = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
const middlewares = reduxExtention ? compose(applyMiddleware(thunk), reduxExtention) : applyMiddleware(thunk);
export const store = createStore(rootReducer, middlewares);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;