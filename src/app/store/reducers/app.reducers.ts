import { ActionReducerMap } from '@ngrx/store';

// Reducers
import { routerReducer } from '@ngrx/router-store';
import { tweetReducers } from './tweet.reducers';

// State
import { IAppState } from '../state/app.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    tweets: tweetReducers,
};
