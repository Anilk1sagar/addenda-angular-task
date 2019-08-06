import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule } from '@angular/material';

// Components
import { TestComponent } from './test/test.component';

export const routes: ModuleWithProviders = RouterModule.forChild([
    
    {
        path: '',
        component: TestComponent,
    },

]);



@NgModule({
    declarations: [
        TestComponent,
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        routes,
    ]
})
export class TestModule { }
