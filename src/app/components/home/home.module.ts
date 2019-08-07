import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';

// Components
import { HomeComponent } from './home.component';
import { TweetDialogModule } from 'src/app/shared/components/tweet-dialog/tweet-dialog.module';
import { TweetCardModule } from 'src/app/shared/components/tweet-card/tweet-card.module';


export const routes: ModuleWithProviders = RouterModule.forChild([
    
    {
        path: '',
        component: HomeComponent,
    },

]);


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        TweetDialogModule,
        TweetCardModule,
        routes,
    ]
})
export class HomeModule { }
