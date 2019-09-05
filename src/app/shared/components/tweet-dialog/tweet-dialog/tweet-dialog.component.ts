import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

// Models
import { Tweet } from 'src/app/models';


@Component({
  selector: 'app-tweet-dialog',
  templateUrl: './tweet-dialog.component.html',
  styleUrls: ['./tweet-dialog.component.scss']
})
export class TweetDialogComponent implements OnInit {

	_mTweet: Tweet;

	constructor(
		private dialog: MatDialog,
		private snackBar: MatSnackBar,
		public matDialogRef: MatDialogRef<TweetDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Tweet
	) { 

		this._mTweet = this.data;
		// console.log('dialog data: ', this._mTweet);
	}

	ngOnInit() {
	}

	_closeDialog() {
		this.dialog.closeAll();
	}


}
