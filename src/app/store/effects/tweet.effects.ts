import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

// Services
import { IAppState } from '../state/app.state';
import {
	ETweetActions,
	GetTweets,
	GetTweetsSuccess,
} from '../actions/tweet.actions';
import { selectTweetList } from '../selectors/tweet.selector';

// Api Services
import { ApiTweetsService } from '../../services/api/services/api-tweets.service';

// Models
import { TweetHttp, Tweet } from '../../models';


@Injectable()
export class TweetEffects {

	// @Effect()
	// getUser$ = this._actions$.pipe(
	// 	ofType<GetTweet>(ETweetActions.GetTweet),
	// 	map(action => action.payload),
	// 	withLatestFrom(this._store.pipe(select(selectTweetList))),
	// 	switchMap(([id, tweets]) => {
	// 		const selectedUser = tweets.filter(user => user.id === +id)[0];
	// 		return of(new GetTweetSuccess(selectedUser));
	// 	})
	// );

	@Effect()
	getTweets$ = this._actions$.pipe(
		ofType<GetTweets>(ETweetActions.GetTweets),
		switchMap(() => this.apiTweetsService.getTweets()),
		switchMap((res: Tweet[]) => {
			// console.log('Api tweets res: ', res);
			return of(new GetTweetsSuccess(res))
		})
	);

  constructor(
    private apiTweetsService: ApiTweetsService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
