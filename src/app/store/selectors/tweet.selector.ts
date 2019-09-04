import { createSelector } from '@ngrx/store';

// Interfaces
import { IAppState } from '../state/app.state';
import { ITweetState } from '../state/tweet.state';

const selectTweets = (state: IAppState) => state.tweets;

export const getAllTweets = createSelector(
	selectTweets,
	(state: ITweetState) => state.data
);
export const getTweetsLoading = createSelector(
	selectTweets,
	(state: ITweetState) => state.loading
);

export const getTweetsLoaded = createSelector(
	selectTweets,
	(state: ITweetState) => state.loadded
);

export const getTweetsError = createSelector(
	selectTweets,
	(state: ITweetState) => state.error
);

// export const selectSelectedTweet = createSelector(
//     selectTweets,
//     (state: ITweetState) => state.selectedTweet
// );
