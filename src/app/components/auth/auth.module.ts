import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatInputModule, MatSnackBarModule, MatProgressBarModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

// Components
import { LoginComponent } from './login/login.component';

export const routes: ModuleWithProviders = RouterModule.forChild([
    
    {
        path: '',
        component: LoginComponent,
    },

]);



@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        FlexModule,
        MatInputModule,
        MatSnackBarModule,
        MatProgressBarModule,
        MatButtonModule,
        MatFormFieldModule,
        routes,
    ]
})
export class AuthModule { }
