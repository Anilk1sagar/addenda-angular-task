import { ActionReducerMap } from '@ngrx/store';

// Reducers
import { routerReducer } from '@ngrx/router-store';
import { TweetReducers } from './tweet.reducers';

// State
import { IAppState } from '../state/app.state';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    tweets: TweetReducers,
};
