import { NgModule } from '@angular/core';
// @ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducers } from './reducers/app.reducers';
import { appEffects } from './effects/app.effects';

// Modules
import { environment } from '../../environments/environment';


@NgModule({
	declarations: [
	],
	imports: [
		StoreModule.forRoot(appReducers),
		EffectsModule.forRoot(appEffects),
		StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
	],
	providers: []
})
export class NgrxStoreModule { }
