import { Action } from '@ngrx/store';

// Models
import { Tweet } from '../../models/tweet.model';

export enum ETweetActions {
    GET_TWEETS = '[Tweet] GET_TWEETS',
    GET_TWEETS_SUCCESS = '[Tweet] GET_TWEETS_SUCCESS',
    GET_TWEETS_FAIL = '[Tweet] GET_TWEETS_FAIL'
}

export class GetTweets implements Action {
    public readonly type = ETweetActions.GET_TWEETS;
}

export class GetTweetsSuccess implements Action {
    public readonly type = ETweetActions.GET_TWEETS_SUCCESS;
    constructor(public payload: Tweet[]) {}
}

export class GetTweetsFail implements Action {
    public readonly type = ETweetActions.GET_TWEETS_FAIL;
    constructor(public payload: Error) {}
}


export type TweetActions = 
    GetTweets 
    | GetTweetsSuccess 
    | GetTweetsFail;
