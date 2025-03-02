import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

// Store
import { IAppState } from '../reducers/app.reducers';
import {
	ETweetActions,
	GetTweets,
	GetTweetsSuccess,
	GetTweetsFail,
} from '../actions/tweet.actions';

// Api Services
import { ApiTweetsService } from '../../services/api/api-tweets.service';

// Models
import { Tweet } from 'src/app/models';


@Injectable()
export class TweetEffects {

  constructor(
    private apiTweetsService: ApiTweetsService,
    private _actions$: Actions,
	private _store: Store<IAppState>,
	public snackBar: MatSnackBar,
  ) {}

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
		ofType<GetTweets>(ETweetActions.GET_TWEETS),
		switchMap(() => {
			return this.apiTweetsService.getTweets()
			.pipe(
				map((tweets: Tweet[]) => {
					// console.log('Api tweets res: ', tweets);
					return new GetTweetsSuccess(tweets);
				}),
				catchError((error) => {
					// console.error('Api res error: ', error);
					return of(new GetTweetsFail(error));
				})
			)
		})
	);

}
