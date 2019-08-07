import { RouterReducerState } from '@ngrx/router-store';

import { ITweetState, initialTweetState } from './tweet.state';


export interface IAppState {
	router?: RouterReducerState;
	tweets: ITweetState;
}

export const initialAppState: IAppState = {
	tweets: initialTweetState,
};

export function getInitialState(): IAppState {
  	return initialAppState;
}
