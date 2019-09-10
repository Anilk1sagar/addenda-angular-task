import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Services
import { AuthGuardService } from './core/services/guards/auth.guard';
import { AppPreloadingStrategy } from './app_preloading_strategy';

// Containers Components
import { BlankContainerComponent } from './containers/blank-container/blank-container.component';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: '',
        component: BlankContainerComponent,
        children: [
            {
                path: 'login',
                loadChildren: './components/auth/auth.module#AuthModule',
                data: { preload: true, delay: false },
            },

            {
                path: 'test',
                loadChildren: './components/test/test.module#TestModule',
                data: { preload: true, delay: false },
            },
        ]
    },

    {
        path: '',
        component: DashboardContainerComponent,
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'home',
                loadChildren: './components/home/home.module#HomeModule',
                data: { preload: true, delay: false },
            },
            // Default
            { 
                path: '**',
                loadChildren: './components/home/home.module#HomeModule', 
                data: { preload: true, delay: false },    
            }
        ]
    },



];

const routingOptions = {
    preloadingStrategy: AppPreloadingStrategy,
    useHash: false,
    enableTracing: false
};

const rootRouting: ModuleWithProviders = RouterModule.forRoot(routes, routingOptions);


@NgModule({
    imports: [
        rootRouting
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
