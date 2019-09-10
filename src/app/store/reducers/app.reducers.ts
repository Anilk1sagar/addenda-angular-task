import { ActionReducerMap } from '@ngrx/store';

// Reducers
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ConfigReducers, IConfigState, initialConfigState } from './config.reducers';
import { ITweetState, initialTweetState, TweetReducers } from './tweet.reducers';


export interface IAppState {
  router?: RouterReducerState;
  configs: IConfigState;
  tweets: ITweetState;
}

// App Reducers
export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  configs: ConfigReducers,
  tweets: TweetReducers,
};

export function getInitialState(): IAppState {
  return {
    tweets: initialTweetState,
    configs: initialConfigState
  };
}
