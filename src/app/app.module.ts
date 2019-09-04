import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// Modules
import { ServicesModule } from './services/services.module';
import { ApiModule } from './services/api/api.module';
import { NgrxStoreModule } from './store/ngrx-store.module';
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
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		HttpClientModule,
		NgrxStoreModule,
		ServicesModule,
		ApiModule.forRoot(),
		ContainersModule,
		AppRoutingModule
	],
	providers: [AppPreloadingStrategy, AuthGuardService],
	bootstrap: [AppComponent]
})
export class AppModule { }
