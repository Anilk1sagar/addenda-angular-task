import { Injectable, InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export let POSTMAN = new InjectionToken('app.postman');

export class Postman {
  
    // static API_BASE_URL: string;
    public static API_URL: string = ''; // environment.baseUrl
    

    getBaseUrl(): string {
        return Postman.API_URL;
    }


    auth() {
        return {
            login: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8W0pWlju6wOPr3ih_aio2gNiVKHd9F8g',
        };
    }

    user() {
        return {
            profile: '/users/' 
        }
    }

    


    /* *
     *  Report 
     * 
     * 
     */

  




}
