import { ActionReducerMap } from '@ngrx/store';

// Reducers
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ITweetState, initialTweetState, TweetReducers } from './tweet.reducers';


export interface IAppState {
	router?: RouterReducerState;
	tweets: ITweetState;
}

// App Reducers
export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  tweets: TweetReducers,
};

export function getInitialState(): IAppState {
  return {
    tweets: initialTweetState,

  };
}
