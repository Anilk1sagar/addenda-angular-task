import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../../environments/environment';
// @ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducers } from './store/reducers/app.reducers';
import { appEffects } from './store/effects/app.effects';

// Services
import { InterceptorAuthService } from './services/interceptors';
import { Postman, POSTMAN } from './services/api/common/postman';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(appReducers),
		EffectsModule.forRoot(appEffects),
		StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        RouterModule,
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

export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(`CoreModule has already been loaded. Import Service modules in the AppModule only.`);
        }
    }

}
