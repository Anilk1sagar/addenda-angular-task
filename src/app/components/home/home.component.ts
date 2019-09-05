import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

/* @ngrx */
import { GetTweets } from './../../store/actions/tweet.actions';
import { IAppState } from '../../store/state/app.state';
import { 
	selectAllTweets, 
	selectTweetsLoading, 
	selectTweetsLoaded,
	selectTweetsError 
} from '../../store/selectors/tweet.selector';

// Models
import { Tweet } from 'src/app/models';

// Components
import { TweetDialogComponent } from 'src/app/shared/components/tweet-dialog/tweet-dialog/tweet-dialog.component';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	_mTweets: Tweet[];

	// Second Method
	_mTweets$: Observable<Tweet[]>;
	_mTweetsError$: Observable<any>;

    constructor(
		private _store: Store<IAppState>,
		private dialog: MatDialog,
		public snackBar: MatSnackBar,
	) { 

	}

    ngOnInit() {

		this._store.dispatch(new GetTweets());

		/* First Method */
		// this._store.pipe(select(getAllTweets)).subscribe((tweets) => {
		// 	console.log('helo tweets: ', tweets);
		// 	if (tweets) {
		// 		this._mTweets = tweets;
		// 	}
		// });

		// this._store.pipe(select(getTweetsError)).subscribe((error: any) => {
		// 	console.log('helo error: ', error);
		// 	if (error) {
		// 		this.snackBar.open(error.error, null, {duration: 5000});
		// 	}
		// });

		// this._store.subscribe((state) => {
		// 	console.log('state', state);
		// 	if (state.tweets.data) this._mTweets = state.tweets.data;
		// 	if (state.tweets.error) this.snackBar.open(state.tweets.error.error, null, {duration: 5000});
		// });

		/* Second Method */
		this._mTweets$ = this._store.pipe(select(selectAllTweets));
		this._mTweetsError$ = this._store.pipe(select(selectTweetsError));
		this._mTweetsError$.subscribe((error) => {
			if (error) this.snackBar.open(error.error, null, {duration: 5000});
		})

	}
	

	_mOnclickTweet(tweet: Tweet) {
		// console.log('onlcik tweet: ', tweet);
		this.openDialog(tweet);
	}

	openDialog(data: Tweet): void {

		const dialogRef = this.dialog.open(TweetDialogComponent, {
			// height: "372px",
		  	data: data
		});
	
		dialogRef.afterClosed().subscribe(result => {
		 	// console.log('The dialog was closed', result);
		});
	}




	/*************************************************************************************************
	*                                          Request Api Server
	*/


}
