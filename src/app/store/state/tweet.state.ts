import { Tweet } from '../../models/tweet.model';

export interface ITweetState {
    tweets: Tweet[];
    selectedTweet: Tweet;
}

export const initialTweetState: ITweetState = {
	tweets: null,
	selectedTweet: null
};
