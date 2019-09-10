import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Services
import { InterceptorAuthService } from './interceptors';
import { Postman, POSTMAN } from './api/common/postman';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule
    ],
    exports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [
        // Interceptors
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorAuthService, multi: true },
        { provide: POSTMAN, useClass: Postman }
    ]
})

export class ServicesModule {

    constructor(@Optional() @SkipSelf() parentModule: ServicesModule) {
        if (parentModule) {
            throw new Error(`ServicesModule has already been loaded. Import Service modules in the AppModule only.`);
        }
    }

}
