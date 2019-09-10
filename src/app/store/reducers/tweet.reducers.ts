import { Tweet } from '../../models/tweet.model';
// Actions
import { ETweetActions, TweetActions } from './../actions/tweet.actions';

// State
export interface ITweetState {
    data: Tweet[];
    loading: boolean;
    loadded: boolean;
    error: any;
}

export const initialTweetState: ITweetState = {
	data: null,
    loading: false,
    loadded: false,
    error: null
};

export const TweetReducers = (state = initialTweetState, action: TweetActions): ITweetState => {

	switch (action.type) {
		case ETweetActions.GET_TWEETS: {
			return {
				...state,
				loading: true
			};
		}
		case ETweetActions.GET_TWEETS_SUCCESS: {
			return {
				...state,
				loading: false,
				loadded: true,
				data: action.payload
			};
		}
		case ETweetActions.GET_TWEETS_FAIL: {
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
