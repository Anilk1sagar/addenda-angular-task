import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
// @ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducers } from './store/reducers/app.reducers';
import { TweetEffects } from './store/effects/tweet.effects';

// Modules
import { environment } from '../environments/environment';
import { ServicesModule } from './services/services.module';
import { ApiModule } from './services/api/api.module';
import { ContainersModule } from './containers/containers.module';
import { AppRoutingModule } from './app-routing.module';

// Services
import { AppPreloadingStrategy } from './app_preloading_strategy';
import { AuthGuardService } from './services/guards/auth.guard';

// Components
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		HttpClientModule,
		StoreModule.forRoot(appReducers),
		EffectsModule.forRoot([TweetEffects,]),
		StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
		!environment.production ? StoreDevtoolsModule.instrument() : [],

		ServicesModule,
		ApiModule.forRoot(),
		ContainersModule,
		AppRoutingModule
	],
	providers: [AppPreloadingStrategy, AuthGuardService],
	bootstrap: [AppComponent]
})
export class AppModule { }
