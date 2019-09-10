import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() {
        console.log('cons', 'LocalStorageService');
    }

    addData(key: string, value: any) {

        if (!value) return;
        
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }

        localStorage.setItem(key, value);
    }


    getData(key: string) {
        return localStorage.getItem(key);
    }

    removeData(key: string) {
        localStorage.removeItem(key);
    }

    public static KEY = {
        accessToken: 'access_token'
    }

}
