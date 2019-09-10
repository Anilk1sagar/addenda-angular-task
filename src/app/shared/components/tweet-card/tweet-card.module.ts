import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';

// Components
import { TweetCardComponent } from './tweet-card.component';

@NgModule({
    declarations: [  TweetCardComponent ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
    ],
    exports:[TweetCardComponent]
})
export class TweetCardModule { }
