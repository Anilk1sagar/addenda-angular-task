import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material';


/* @ngrx */
import { GetTweets } from './../../store/actions/tweet.actions';
import { IAppState } from '../../store/state/app.state';
import { selectTweetList } from '../../store/selectors/tweet.selector';
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
	tweets$ = this._store.pipe(select(selectTweetList));

    constructor(
		private _store: Store<IAppState>,
		private dialog: MatDialog,
	) { 

	}

    ngOnInit() {

		this._store.dispatch(new GetTweets());

		// console.log(this.tweets$);

		this.tweets$.subscribe((value) => {

			console.log('value is: ', value);
			if (value) {
				this._mTweets = value;
			}

		}, (error) => {
			console.error(error);
		});

	}
	

	_mOnclickTweet(tweet: Tweet) {
		console.log('onlcik tweet: ', tweet);
		this.openDialog(tweet);
	}

	openDialog(data: Tweet): void {

		const dialogRef = this.dialog.open(TweetDialogComponent, {
			// height: "372px",
		  	data: data
		});
	
		dialogRef.afterClosed().subscribe(result => {
		 	console.log('The dialog was closed', result);
		});
	}




	/* ******************************************************************************************************************
	*                                                    Request Api Server
	*/


}
