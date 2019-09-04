import { Action } from '@ngrx/store';

// Models
import { Tweet } from '../../models/tweet.model';

export enum ETweetActions {
    GetTweets = '[Tweet] Get Tweets',
    GetTweetsSuccess = '[Tweet] Get Tweets Success',
    GetTweetsSuccessFail = '[Tweet] Get Tweets Success Fail'
}

export class GetTweets implements Action {
    public readonly type = ETweetActions.GetTweets;
}

export class GetTweetsSuccess implements Action {
    public readonly type = ETweetActions.GetTweetsSuccess;
    constructor(public payload: Tweet[]) {}
}

export class GetTweetsSuccessFail implements Action {
    public readonly type = ETweetActions.GetTweetsSuccessFail;
    constructor(public payload: Error) {}
}


export type TweetActions = GetTweets | GetTweetsSuccess | GetTweetsSuccessFail;
