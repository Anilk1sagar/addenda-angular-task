import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home.component';

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
        routes,
    ]
})
export class HomeModule { }
