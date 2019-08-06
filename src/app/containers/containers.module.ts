import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSnackBarModule } from '@angular/material';

// Components
import { BlankContainerComponent } from './blank-container/blank-container.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';



@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSnackBarModule,
        RouterModule,
    ],
    declarations: [
        BlankContainerComponent,
        DashboardContainerComponent,
    ],
    exports: [
        BlankContainerComponent,
    ]
})
export class ContainersModule { }
