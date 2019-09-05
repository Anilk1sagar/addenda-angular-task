import { createSelector } from '@ngrx/store';

// Interfaces
import { IAppState } from '../state/app.state';
import { ITweetState } from '../state/tweet.state';

const selectTweets = (state: IAppState) => state.tweets;

export const selectAllTweets = createSelector(
	selectTweets,
	(state: ITweetState) => state.data
);
export const selectTweetsLoading = createSelector(
	selectTweets,
	(state: ITweetState) => state.loading
);

export const selectTweetsLoaded = createSelector(
	selectTweets,
	(state: ITweetState) => state.loadded
);

export const selectTweetsError = createSelector(
	selectTweets,
	(state: ITweetState) => state.error
);

// export const selectSelectedTweet = createSelector(
//     selectTweets,
//     (state: ITweetState) => state.selectedTweet
// );
