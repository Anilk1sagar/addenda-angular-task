import { Tweet } from '../../models/tweet.model';

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
