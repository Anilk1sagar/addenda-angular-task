import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from 'src/app/models';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {

  tweet: Tweet;

  @Input('model') set modelIn(value: Tweet) {
    if (value) {
      this.tweet = value;
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
