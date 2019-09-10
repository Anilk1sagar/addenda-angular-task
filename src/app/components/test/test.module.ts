import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';

// Components
import { TestComponent } from './test.component';
import { ButtonsComponent } from './buttons/buttons.component';

export const routes: ModuleWithProviders = RouterModule.forChild([
    
    {
        path: '',
        component: TestComponent,
    },

]);



@NgModule({
    declarations: [
        TestComponent,
        ButtonsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        routes,
    ]
})
export class TestModule { }
