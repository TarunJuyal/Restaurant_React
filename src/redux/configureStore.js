import { createStore, combineReducers, applyMiddleware } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./forms";

const createStoreWithMiddleware = applyMiddleware(
  logger,
  ReduxThunk
)(createStore);

export const ConfigureStore = () => {
  const store = createStoreWithMiddleware(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      leaders: Leaders,
      promotions: Promotions,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
