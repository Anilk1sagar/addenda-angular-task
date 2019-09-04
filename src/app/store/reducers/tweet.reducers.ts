// Actions
import { ETweetActions, TweetActions } from './../actions/tweet.actions';

// State
import { initialTweetState, ITweetState } from '../state/tweet.state';

export const TweetReducers = (state = initialTweetState, action: TweetActions): ITweetState => {

	switch (action.type) {
		case ETweetActions.GetTweets: {
			return {
				...state,
				loading: true
			};
		}
		case ETweetActions.GetTweetsSuccess: {
			return {
				...state,
				loading: false,
				loadded: true,
				data: action.payload
			};
		}
		case ETweetActions.GetTweetsFail: {
			return {
				...state,
				loading: false,
				loadded: false,
			    error: action.payload
			};
		}
		default:
			return state;
	}
};
