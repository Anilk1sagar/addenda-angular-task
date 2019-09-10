import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// Modules
import { CoreModule } from './core/core.module';
import { ContainersModule } from './containers/containers.module';
import { AppRoutingModule } from './app-routing.module';

// Services
import { AppPreloadingStrategy } from './app_preloading_strategy';
import { AuthGuardService } from './core/services/guards/auth.guard';

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
		CoreModule,
		ContainersModule,
		AppRoutingModule
	],
	providers: [AppPreloadingStrategy, AuthGuardService],
	bootstrap: [AppComponent]
})
export class AppModule { }
