import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { TweetDialogComponent } from './tweet-dialog/tweet-dialog.component';
import { TweetCardModule } from '../tweet-card/tweet-card.module';

@NgModule({
    declarations: [ TweetDialogComponent ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        TweetCardModule
    ],
    entryComponents:[TweetDialogComponent],
    exports:[TweetDialogComponent]
})
export class TweetDialogModule { }
