import { createSelector } from '@ngrx/store';

// Interfaces
import { IAppState } from '../reducers/app.reducers';
import { IConfigState } from '../reducers/config.reducers';

const selectConfigs = (state: IAppState) => state.configs;

export const selectCurrentTheme = createSelector(
	selectConfigs,
	(state: IConfigState) => state.currentTheme
);

// export const selectSelectedTweet = createSelector(
//     selectTweets,
//     (state: ITweetState) => state.selectedTweet
// );
